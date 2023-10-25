# M3TV Network JSON Schema

This JSON schema is designed for managing, automating, and presenting a 24/7 live broadcast network named M3TV. The JSON includes various components to accommodate shows, commercials, live events, interrupts, and interviews. It is structured to provide all the required details for a network programmer.

[toc]

---

## Network

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


<details>
```json
{
  "network": {
    "name": "M3TV",
    "logo_url": "https://example.com/logo.png",
    "website": "https://mtv.com",
    "social_media": {
      "facebook": "",
      "twitter": "",
      "instagram": ""
    },
    "shows": [
      {
        "title": "Show 1",
        "description": "Description for Show 1",
        "seasons": [
          {
            "season_number": 1,
            "episodes": [
              {
                "episode_number": 1,
                "title": "Episode 1",
                "description": "Description for Episode 1",
                "url": "https://example.com/episode1",
                "director": "John Doe",
                "producer": "Jane Doe",
                "cast": [
                  "Actor 1",
                  "Actor 2"
                ],
                "length": "45m",
                "genre": "Comedy",
                "social_media": {
                  "facebook": "https://facebook.com/episode1",
                  "twitter": "https://twitter.com/episode1",
                  "instagram": "https://instagram.com/episode1"
                },
                "call_to_action": {
                  "text": "Watch Now",
                  "link": "https://example.com/watch/episode1"
                }
              },
              {
                "episode_number": 2,
                "title": "Episode 2",
                "description": "Description for Episode 2",
                "url": "https://example.com/episode2",
                "director": "John Doe",
                "producer": "Jane Doe",
                "cast": [
                  "Actor 3",
                  "Actor 4"
                ],
                "length": "42m",
                "genre": "Action",
                "social_media": {
                  "facebook": "https://facebook.com/episode2",
                  "twitter": "https://twitter.com/episode2",
                  "instagram": "https://instagram.com/episode2"
                },
                "call_to_action": {
                  "text": "Watch Now",
                  "link": "https://example.com/watch/episode2"
                }
              }
            ]
          }
        ]
      }
    ]
  }
}

```

</details>