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
            }
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
            }
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



    

