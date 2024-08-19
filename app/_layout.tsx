import { Stack, useLocalSearchParams } from "expo-router";

export default function RootLayout() {
  const params = useLocalSearchParams();
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false, 
          // title: "Home"
        }}
      />
      <Stack.Screen 
        name="items/[id]"
        options={{}}
      />
      

    </Stack>
  );
}
