# M3TV Network

[M3TV Docs](https://hackmd.io/@boomboxhead/m3tv-dev/)

## Summery
Create an open source website template for 24 hours of video content.

# Schema Ideas
[toc]

This JSON schema is designed for managing, automating, and presenting a 24/7 live broadcast network named M3TV. The JSON includes various components to accommodate shows, commercials, live events, interrupts, and interviews. It is structured to provide all the required details for a network programmer. 

## Metadata Breakdown and Details

## Broadcasting Network JSON Structure Documentation

## Shows
Each item in the `shows` array represents a show with the following attributes:

- `id`: The unique identifier for the show.
- `title`: The title of the show.
- `schedule_time`: The scheduled time for the show in ISO 8601 format.
- `length`: The duration of the show.
- `OBSScene`: The OBS scene associated with the show.
- `metadata`: Additional metadata about the show, including:
  - `description`: A brief description of the show.
  - `tags`: A list of tags associated with the show.
  - `rating`: The viewer rating of the show.
  - `fallback`: The fallback show in case of any issues.
  - `season`: The season number of the show.
  - `episode`: The episode number of the show.
  - `url`: A URL related to the show.
  - `director`: The director of the show.
  - `producer`: The producer of the show.
  - `cast`: A list of cast members.
  - `genre`: The genre of the show.
  - `social`: Social media links related to the show.
  - `thumbnail`: The thumbnail image file name.
  - `file`: The video file name.

## Commercials
Each item in the `commercials` array represents a commercial with the following attributes:

- `id`: The unique identifier for the commercial.
- `title`: The title of the commercial.
- `schedule_time`: The scheduled time for the commercial in ISO 8601 format.
- `length`: The duration of the commercial.
- `OBSScene`: The OBS scene associated with the commercial.
- `metadata`: Additional metadata about the commercial, including:
  - `description`: A brief description of the commercial.
  - `fallback`: The fallback show in case of any issues.
  - `url`: A URL related to the commercial.
  - `social`: Social media links related to the commercial.
  - `thumbnail`: The thumbnail image file name.
  - `file`: The video file name.

## Others
Each item in the `others` array represents other types of content (like news updates) with the following attributes:

- `id`: The unique identifier for the content.
- `title`: The title of the content.
- `schedule_time`: The scheduled time for the content in ISO 8601 format.
- `OBSScene`: The OBS scene associated with the content.
- `metadata`: Additional metadata about the content, including:
  - `description`: A brief description of the content.
  - `rating`: The viewer rating of the content.
  - `fallback`: The fallback show in case of any issues.
  - `season`: The season number of the content.
  - `episode`: The episode number of the content.
  - `url`: A URL related to the content.
  - `director`: The director of the content.
  - `producer`: The producer of the content.
  - `cast`: A list of cast members.
  - `genre`: The genre of the content.
  - `social`: Social media links related to the content.
  - `thumbnail`: The thumbnail image file name.
  - `file`: The video file name.

---

### Example JSON

```json
{
    "network": {
        "shows": [
            {
                "id": "1",
                "title": "GM: Wake And Bake",
                "schedule_time": "2023-01-01T00:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Show_1",
                "metadata": 
                {
                    "description": "A show where we wake up to some good tunes and start the day",
                    "tags": ["comedy", "prime-time"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead",
                              "Jin"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "2",
                "title": "Music Hour",
                "schedule_time": "2023-01-01T01:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_MusicHour",
                "metadata": 
                {
                    "description": "Music videos",
                    "tags": ["music"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "3",
                "title": "3d Shorts / Cartoons",
                "schedule_time": "2023-01-01T02:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Cartoons_1",
                "metadata": 
                {
                    "description": "3d shorts and animations by community members",
                    "tags": ["comedy","shorts","3d"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "4",
                "title": "Interop Shop",
                "schedule_time": "2023-01-01T03:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_InteropShop",
                "metadata": 
                {
                    "description": "Jin goes over metaverse interop updates",
                    "tags": ["interop","devlog"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "5",
                "title": "DemoDay: New Projects",
                "schedule_time": "2023-01-01T04:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Show_1",
                "metadata": 
                {
                    "description": "DemoDay is a day when m3 community members get together and share updates on WIP projects",
                    "tags": ["wips","demoday","demo"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "6",
                "title": "Music Hour",
                "schedule_time": "2023-01-01T05:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_MusicHour",
                "metadata": 
                {
                    "description": "Music videos",
                    "tags": ["music", "music videos"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "7",
                "title": "3d Shorts / Cartoons",
                "schedule_time": "2023-01-01T06:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Cartoons_1",
                "metadata": 
                {
                    "description": "3d shorts and animations by community members",
                    "tags": ["shorts","3d"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "8",
                "title": "Web3 Bounty Hunters",
                "schedule_time": "2023-01-01T07:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Show_1",
                "metadata": 
                {
                    "description": "Going over current open bounties, and showcasing completed bounties and finished bounties",
                    "tags": ["bounties","web3"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "9",
                "title": "WorldHopping: Hyperfy",
                "schedule_time": "2023-01-01T08:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Live_Event_1",
                "metadata": 
                {
                    "description": "World hopping to different metaverse worlds to check out the community builders and new features of current metaverses to have some fun!",
                    "tags": ["worldhop","exploring"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "10",
                "title": "Lab: Blender Modeling",
                "schedule_time": "2023-01-01T09:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Show_1",
                "metadata": 
                {
                    "description": "Get hands on instruction by blender gurus of the community, showing you how to create 3d worlds, avatars, and aniamtions.",
                    "tags": ["blender","3d", "dev"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "11",
                "title": "WorldHopping: CryptoVoxels",
                "schedule_time": "2023-01-01T10:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Live_Event_1",
                "metadata": 
                {
                    "description": "World hopping to different metaverse worlds to check out the community builders and new features of current metaverses to have some fun!",
                    "tags": ["worldhop","exploring"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "12",
                "title": "WorldHopping: VRChat",
                "schedule_time": "2023-01-01T11:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Live_Event_1",
                "metadata": 
                {
                    "description": "World hopping to different metaverse worlds to check out the community builders and new features of current metaverses to have some fun!",
                    "tags": ["worldhop","exploring"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "13",
                "title": "GM: Wake And Bake",
                "schedule_time": "2023-01-01T12:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Show_1",
                "metadata": 
                {
                    "description": "A show where we wake up to some good tunes and start the day",
                    "tags": ["comedy", "prime-time"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead",
                              "Jin"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "14",
                "title": "Music Hour",
                "schedule_time": "2023-01-01T13:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_MusicHour",
                "metadata": 
                {
                    "description": "Music videos",
                    "tags": ["music"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "15",
                "title": "3d Shorts / Cartoons",
                "schedule_time": "2023-01-01T14:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Cartoons_1",
                "metadata": 
                {
                    "description": "3d shorts and animations by community members",
                    "tags": ["comedy","shorts","3d"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "16",
                "title": "Interop Shop",
                "schedule_time": "2023-01-01T15:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_InteropShop",
                "metadata": 
                {
                    "description": "Jin goes over metaverse interop updates",
                    "tags": ["interop","devlog"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "17",
                "title": "DemoDay: New Projects",
                "schedule_time": "2023-01-01T16:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Show_1",
                "metadata": 
                {
                    "description": "DemoDay is a day when m3 community members get together and share updates on WIP projects",
                    "tags": ["wips","demoday","demo"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "18",
                "title": "Music Hour",
                "schedule_time": "2023-01-01T17:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_MusicHour",
                "metadata": 
                {
                    "description": "Music videos",
                    "tags": ["music", "music videos"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "19",
                "title": "3d Shorts / Cartoons",
                "schedule_time": "2023-01-01T18:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Cartoons_1",
                "metadata": 
                {
                    "description": "3d shorts and animations by community members",
                    "tags": ["shorts","3d"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "20",
                "title": "Web3 Bounty Hunters",
                "schedule_time": "2023-01-01T19:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Show_1",
                "metadata": 
                {
                    "description": "Going over current open bounties, and showcasing completed bounties and finished bounties",
                    "tags": ["bounties","web3"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "21",
                "title": "WorldHopping: Hyperfy",
                "schedule_time": "2023-01-01T20:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Live_Event_1",
                "metadata": 
                {
                    "description": "World hopping to different metaverse worlds to check out the community builders and new features of current metaverses to have some fun!",
                    "tags": ["worldhop","exploring"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "22",
                "title": "Lab: Blender Modeling",
                "schedule_time": "2023-01-01T21:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Show_1",
                "metadata": 
                {
                    "description": "Get hands on instruction by blender gurus of the community, showing you how to create 3d worlds, avatars, and aniamtions.",
                    "tags": ["blender","3d", "dev"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "23",
                "title": "WorldHopping: CryptoVoxels",
                "schedule_time": "2023-01-01T22:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Live_Event_1",
                "metadata": 
                {
                    "description": "World hopping to different metaverse worlds to check out the community builders and new features of current metaverses to have some fun!",
                    "tags": ["worldhop","exploring"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "24",
                "title": "WorldHopping: VRChat",
                "schedule_time": "2023-01-01T23:00:00Z",
                "length": "1h",
                "OBSScene": "Scene_Live_Event_1",
                "metadata": 
                {
                    "description": "World hopping to different metaverse worlds to check out the community builders and new features of current metaverses to have some fun!",
                    "tags": ["worldhop","exploring"],
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "Comedy",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            }
        ],
        "commercials": [
            {
                "id": "1c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T00:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "2c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T01:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "3c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T02:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "4c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T03:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "5c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T04:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "6c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T05:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "7c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T06:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "8c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T07:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "9c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T08:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "10c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T09:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "11c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T10:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "12c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T11:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "13c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T12:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "14c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T13:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "15c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T14:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "16c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T15:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "17c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T16:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "18c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T17:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "19c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T18:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "20c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T19:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "21c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T20:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "22c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T21:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "23c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T22:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "24c",
                "title": "Commercials",
                "schedule_time": "2023-01-01T23:59:30Z",
                "length": "30s",
                "OBSScene": "Scene_Commercial_1",
                "metadata": 
                {
                    "description": "Commercials",
                    "fallback": "Fallback Show 1",
                    "url": "https://www.twitter.com/boomboxheads",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            }
        ],
        "others": [
            {
                "id": "1i",
                "title": "Interupt",
                "schedule_time": "2023-01-01T13:30:00Z",
                "OBSScene": "Scene_Urgent_News",
                "metadata": 
                {
                    "description": "Breaking News Update",
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "News",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            },
            {
                "id": "2l",
                "title": "LiveStream",
                "schedule_time": "2023-01-01T13:30:00Z",
                "OBSScene": "Scene_LiveStream",
                "metadata": 
                {
                    "description": "M3TV Live",
                    "rating": 4.5,
                    "fallback": "Fallback Show 1",
                    "season": 1,
                    "episode": 1,
                    "url": "https://www.twitter.com/boomboxheads",
                    "director": "Boomboxhead",
                    "producer": "Boomboxhead",
                    "cast": [
                              "Boomboxhead"
                            ],
                    "genre": "LiveStream",
                    "social": ["https://www.twitter.com/m3org"],
                    "thumbnail": "thumbnail.png",
                    "file": "video.mp4"
                }   
            }
        ]
    }
}


```



    

