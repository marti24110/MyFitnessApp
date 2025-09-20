import { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

export default function HomeScreen() {
  const [joke, setJoke] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // fetch data when the screen loads
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((data) => {
        setJoke(`${data.setup} — ${data.punchline}`)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, []) // empty [] = run only once, when screen mounts

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <Text>{joke}</Text>
      )}
    </View>
  )
}
