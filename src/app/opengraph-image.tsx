import { ImageResponse } from "next/og"

export const alt = "Kathy Clean Houston - Professional Cleaning Services"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f3f7fa",
          color: "#1a2938",
          fontFamily: "'Poppins', 'allRoundGothic', sans-serif",
          fontWeight: 700,
        }}
      >
        <img
          src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomaYo5lyrN0W8yorQH6lnDudV4OjgIFLEC2YpM"
          width={160}
          height={80}
          style={{ marginBottom: 32, borderRadius: 12 }}
          alt="Kathy Clean Houston Logo"
        />
        <h1
          style={{
            fontSize: 60,
            margin: 0,
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          Residential & Commercial Cleaning in Houston
        </h1>
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            marginTop: 36,
            color: "#3f4e65",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Trusted for over 10 years. 48-hour satisfaction guarantee.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}


export const twitterImage = Image;