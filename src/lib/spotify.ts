const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = btoa(`${client_id}:${client_secret}`)
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

type SpotifyTokenResponse = { access_token?: string }
type SpotifyNowPlayingResponse = {
  is_playing: boolean
  item: {
    name: string
    artists: Array<{ name: string }>
    album: { name: string; images: Array<{ url: string }> }
    external_urls: { spotify: string }
  } | null
}

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token!,
    }),
  })

  return response.json()
}

export const getNowPlaying = async () => {
  if (!refresh_token) {
    return { isPlaying: false }
  }
  try {
    const data = (await getAccessToken()) as SpotifyTokenResponse
    const access_token = data.access_token

    if (!access_token) {
      return { isPlaying: false }
    }

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    if (response.status === 204 || response.status >= 400) {
      return { isPlaying: false }
    }

    const song = (await response.json()) as SpotifyNowPlayingResponse

    if (!song || song.item === null) {
      return { isPlaying: false }
    }

    return {
      album: song.item.album.name,
      albumImageUrl: song.item.album.images[0].url,
      artist: song.item.artists
        .map((_artist: { name: string }) => _artist.name)
        .join(", "),
      isPlaying: song.is_playing,
      songUrl: song.item.external_urls.spotify,
      title: song.item.name,
    }
  } catch {
    return { isPlaying: false }
  }
}
