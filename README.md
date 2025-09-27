## Current Status

This project currently implements the **core functionality** of the assignment:

-  **Authentication**
  - JWT-based signup and login
  - JSON Web Token (JWT) verification middleware
  - Function for generating signed URLs and access tokens
-  **Video Handling**
  - Video catalog page with thumbnails
  - Video playback using **Video.js** (HLS)
-  **Encryption**
  - Implemented AES-128 HLS encryption using `ffmpeg` commands
  - Key file and `.m3u8` playlist generation

### Limitations / Pending Improvements
-  Security system is **basic** — needs improvements like token expiration handling, key rotation, and stricter authorization checks.
-  Signed URL validation could be hardened for production.
-  Error handling and refresh token mechanism not yet implemented.
-  Analytics & watermark system not fully added.

---

FFmpeg Commands

To generate encrypted HLS segments:

# Create key and keyinfo
echo "public/videos/enc.key" > public/videos/enc.keyinfo
echo "public/videos/enc.key" >> public/videos/enc.keyinfo
echo "http://localhost:3000/api/keys" >> public/videos/enc.keyinfo

# Convert and encrypt video
ffmpeg -i public/raw_videos/sample.mp4 \
  -hls_time 10 \
  -hls_key_info_file public/videos/enc.keyinfo \
  -hls_playlist_type vod \
  -hls_segment_filename "public/videos/segment%03d.ts" \
  public/videos/output.m3u8

 Security Notes

Never commit keys or video files to GitHub.

enc.key and enc.keyinfo are sensitive — they are in .gitignore.

Instead, provide instructions (as above) to generate them locally.


The project currently demonstrates ~80–85% of the full requirements.
