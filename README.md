# M3TV Network JSON Schema
![](https://hackmd.io/_uploads/S17etZvfT.jpg)

This JSON schema is designed for managing, automating, and presenting a 24/7 live broadcast network named M3TV. The JSON includes various components to accommodate shows, commercials, live events, interrupts, and interviews. It is structured to provide all the required details for a network programmer. 

https://www.figma.com/file/Y3qClwxIryXEMMkKoBIjds/m3tV-Network?type=whiteboard&node-id=0%3A1&t=BqnHKP5UK8v8WDtO-1

---

## Metadata Breakdown and Details

### Name
- `name`: The name of the network.

### Logo URL
- `logo_url`: URL for the network's logo.

### Website
- `website`: URL for the network's website.

### Social Media
- `social_media`: Social media links for the network.

#### Broadcasting API
- `broadcasting_api`: Endpoints for controlling the live broadcast.
  - `start_broadcast`: Endpoint to start the broadcast.
  - `end_broadcast`: Endpoint to end the broadcast.
  - `interrupt`: Endpoint to inject interrupts into the broadcast.

#### Analytics API
- `analytics_api`: Endpoints for analytics data.
  - `post_viewers`: Endpoint to send viewer data.
  - `post_interactions`: Endpoint to send interactions or engagements.

## Shows
- `shows`: List of shows to be broadcast.
  - `title`: Title of the show.
  - `description`: Description of the show.
  - `schedule_time`: Time when the show will be broadcast.
  - `status`: The status of the show (e.g., scheduled, live, completed).
  - `priority`: Priority for broadcasting (lower is higher priority).
  - `assets`: Media assets like thumbnails and video files.
  - `tags`: Categorization tags.
  - `viewer_rating`: Average viewer rating.
  - `localization`: Localization data for different languages.
  - `permissions`: User roles who can alter or broadcast the show.
  - `fallback`: Fallback show in case of issues.
  - `seasons`: Seasons that belong to a show.
    - `episodes`: Episodes that belong to a season.

## Commercials
- `commercials`: List of commercials to be broadcast.
  - `title`: Title of the commercial.
  - `description`: Description of the commercial.
  - `length`: Duration of the commercial.
  - `url`: URL where it can be accessed.
  - `encode_info`: Encoding information.
  - `schedule_time`: Time when the commercial will be broadcast.
  - `status`: Status of the commercial (e.g., scheduled, live, completed).
  - `priority`: Priority for broadcasting.

## Live Events
- `live_events`: List of live events to be broadcast.
  - `title`: Title of the live event.
  - `description`: Description of the live event.
  - `start_time`: Start time of the live event.
  - `end_time`: End time of the live event.
  - `encode_info`: Encoding information.
  - `schedule_time`: Time when the live event will be broadcast.
  - `status`: Status of the live event (e.g., scheduled, live, completed).
  - `priority`: Priority for broadcasting.

## Interrupts
- `interrupts`: List of interrupts that can be injected into the broadcast.
  - `title`: Title of the interrupt.
  - `description`: Description of the interrupt.
  - `url`: URL where it can be accessed.
  - `encode_info`: Encoding information.
  - `schedule_time`: Time when the interrupt will be broadcast.
  - `status`: Status of the interrupt (e.g., scheduled, live, completed).
  - `priority`: Priority for broadcasting.

## Interviews
- `interviews`: List of interviews to be broadcast.
  - `title`: Title of the interview.
  - `description`: Description of the interview.
  - `length`: Duration of the interview.
  - `encode_info`: Encoding information.
  - `schedule_time`: Time when the interview will be broadcast.
  - `status`: Status of the interview (e.g., scheduled, live, completed).
  - `priority`: Priority for broadcasting.

## Virtual Demo Days
- `virtual_demo_days`: List of virtual demo days to be broadcast.
  - `title`: Title of the virtual demo day.
  - `description`: Description of the virtual demo day.
  - `start_time`: Start time of the virtual demo day.
  - `end_time`: End time of the virtual demo day.
  - `encode_info`: Encoding information.
  - `schedule_time`: Time when the virtual demo day will be broadcast.
  - `status`: Status of the virtual demo day (e.g., scheduled, live, completed).
  - `priority`: Priority for broadcasting.

---

### Example JSON

<details>
    
```json
{
  "network": {
    "name": "M3TV",
    "logo_url": "logo.png",
    "website": "https://URL",
    "social_media": {
      "facebook": "",
      "twitter": "",
      "instagram": ""
    },
    "broadcasting_api": {
      "start_broadcast": "https://API/start",
      "end_broadcast": "https://API/end",
      "interrupt": "https://API/interrupt"
    },
    "analytics_api": {
      "post_viewers": "https://API/viewers",
      "post_interactions": "https://API/interactions"
    },
    "shows": [
      {
        "title": "Show 1",
        "description": "Description for Show 1",
        "schedule_time": "2023-01-01T12:00:00Z",
        "status": "scheduled",
        "priority": 1,
        "assets": {
          "thumbnail": "thumbnail.png",
          "video_file": "video.mp4"
        },
        "tags": ["comedy", "prime-time"],
        "viewer_rating": 4.5,
        "localization": {
          "en": {
            "title": "Show 1",
            "description": "Description for Show 1"
          },
          "es": {
            "title": "Espectáculo 1",
            "description": "Descripción para el Espectáculo 1"
          }
        },
        "permissions": {
          "alter": ["admin", "editor"],
          "broadcast": ["admin"]
        },
        "fallback": "Fallback Show 1",
        "seasons": [
          {
            "season_number": 1,
            "episodes": [
              {
                "episode_number": 1,
                "title": "Episode 1",
                "description": "Description for Episode 1",
                "url": "episode1",
                "director": "John Doe",
                "producer": "Jane Doe",
                "cast": [
                  "Actor 1",
                  "Actor 2"
                ],
                "length": "45m",
                "genre": "Comedy",
                "social_media": {
                  "facebook": "https://URL",
                  "twitter": "https://URL",
                  "instagram": "https://URL"
                },
                "call_to_action": {
                  "text": "Watch Now",
                  "link": "watch/episode1"
                }
              },
              {
                "episode_number": 2,
                "title": "Episode 2",
                "description": "Description for Episode 2",
                "url": "episode2",
                "director": "John Doe",
                "producer": "Jane Doe",
                "cast": [
                  "Actor 3",
                  "Actor 4"
                ],
                "length": "42m",
                "genre": "Action",
                "social_media": {
                  "facebook": "https://URL",
                  "twitter": "https://URL",
                  "instagram": "https://URL"
                },
                "call_to_action": {
                  "text": "Watch Now",
                  "link": "watch/episode2"
                }
              }
            ]
          }
        ]
      }
    ],
    "commercials": [
      {
        "title": "Commercial 1",
        "description": "This is a commercial",
        "length": "30s",
        "url": "commercial1",
        "encode_info": "H.264, AAC",
        "schedule_time": "2023-01-01T12:15:00Z",
        "status": "scheduled",
        "priority": 2
      }
    ],
    "live_events": [
      {
        "title": "Live Web3 Interop",
        "description": "Live streaming of Web3 interoperability discussions",
        "start_time": "2023-01-01T12:00:00Z",
        "end_time": "2023-01-01T14:00:00Z",
        "encode_info": "H.264, AAC",
        "schedule_time": "2023-01-01T11:45:00Z",
        "status": "scheduled",
        "priority": 3
      }
    ],
    "interrupts": [
      {
        "title": "Urgent News",
        "description": "Breaking news interrupt",
        "url": "urgent_news",
        "encode_info": "H.264, AAC",
        "schedule_time": "2023-01-01T13:30:00Z",
        "status": "scheduled",
        "priority": 4
      }
    ],
    "interviews": [
      {
        "title": "Interview with CEO",
        "description": "An exclusive interview with the CEO",
        "length": "20m",
        "encode_info": "H.264, AAC",
        "schedule_time": "2023-01-01T15:00:00Z",
        "status": "scheduled",
        "priority": 5
      }
    ],
    "virtual_demo_days": [
      {
        "title": "Virtual Demo Day 1",
        "description": "Startups showcasing their products",
        "start_time": "2023-01-10T09:00:00Z",
        "end_time": "2023-01-10T12:00:00Z",
        "encode_info": "H.264, AAC",
        "schedule_time": "2023-01-10T08:45:00Z",
        "status": "scheduled",
        "priority": 6
      }
    ]
  }
}


```

</details>


