# M3TV Network JSON Schema
![](https://hackmd.io/_uploads/S17etZvfT.jpg)

This JSON schema is designed for managing, automating, and presenting a 24/7 live broadcast network named M3TV. The JSON includes various components to accommodate shows, commercials, live events, interrupts, and interviews. It is structured to provide all the required details for a network programmer. 

https://www.figma.com/file/Y3qClwxIryXEMMkKoBIjds/m3tV-Network?type=whiteboard&node-id=0%3A1&t=BqnHKP5UK8v8WDtO-1

![image](https://github.com/gm3/m3tv-network/assets/7612104/39077d79-2d80-4c7e-808d-8a9a1d9a54f0)

A high-level overview detailing the content flow for the system.

## Revenue Pathway
- **OpenAI**: Produces shows which feed into the NFT Projects.
- **NFT Projects**: Interacts with the MINT process.
- **MINT**: Possibly involved in minting NFTs, uses NFT Metadata.
- **Revenue Generation**: 
  - **Treasury**: Influenced by a DAO vote/multisig mechanism.
  - **Sponsors**
  - **NFT Sales**
  - **Commercials**

## Frontend Pathway
- Content is displayed or interacts with the frontend through:
  - **Events**
  - **Preposals** (Might be a typo; possibly meant "Proposals")
  - **Donations**
  - **Website**

## Operators
- **Remote OBS Control**: Part of the module for operators.
- **AI Show Runners**: Another entity in the operators module.
- **Mods (Moderators)**: Likely involved in managing or moderating the stream.
- **Stream**: Managed using the OBS Instance on AWS which has:
  - Different stages/scenes
  - Overlays
  - Video sources
  - Audio sources

## Metadata Storage and Automation
- **GitHub Actions**: Used to automate tasks like uploading videos and audios to AWS Storage. Triggered by the addition of a new media file.
- **Storage Distinction**:
  - **Cloud AWS Storage**: Explicitly for storing videos.
  - **Cloud AWS GPU Instance**: Possibly for processing or streaming.

## Streaming
- Managed by an **OBS instance on AWS** which uses:
  - Different scenes
  - Overlays
  - The encoding process signifies the conversion of media into a format suitable for streaming.


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

# Network Operations Manual
*tags: Your-Network-Name, Operations, Manual*

## Table of Contents
- [Overview](#overview)
- [Core Challenges](#core-challenges)
- [Roles and Responsibilities](#roles-and-responsibilities)
- [Content Pipeline](#content-pipeline)
- [Marketing and Audience Strategy](#marketing-and-audience-strategy)
- [Financials](#financials)
- [Quality Control](#quality-control)
- [Meeting Agenda](#meeting-agenda)

---

## Overview
We are at the intersection of entertainment, education, and cutting-edge technology, focusing on Metaverse interoperability, 3D modeling, avatars, and virtual worlds. Our mission is to captivate viewers through a rich tapestry of content forms—from memes that capture the zeitgeist, to deep-dives into market trends, and even tutorials that empower our audience. Whether it's short-form interviews with industry trailblazers or long-form conversations with experts dissecting the nuances of 3D engineering, our content is designed to be as entertaining as it is insightful.

Objective: [Your Objective]
Target Audience: [Your Target Audience]
Tone and Style: [Describe the tone and style]
Planned Number of Episodes: [Number]
Timeline: [Start Date - End Date]


---

## Core Challenges

### 1. Content Strategy
- Determining what kind of content resonates with the audience.
  
### 2. Scalability
- Processes and resources need to scale with increasing content and viewership.
  
### 3. Resource Management
- Efficient allocation and management of human and financial resources.
  
### 4. Quality Control
- Ensuring the consistent quality of content across various shows and formats.
  
### 5. Audience Engagement
- Building and sustaining a dedicated viewer base.
  
### 6. Revenue Generation
- Monetizing content without sacrificing quality or viewer engagement.

---

## Roles and Responsibilities

- **Network Executive**: Overall strategy and business decisions.
- **Program Manager**: Managing the schedule and content pipeline.
- **Marketing Manager**: Audience growth and engagement strategies.
- **Technical Support**: Ensuring all technical aspects run smoothly.
- **Legal Advisor**: Handling legal aspects like contracts and copyrights.

---

## Content Pipeline

1. **Idea Generation**
    - Brainstorming and conceptualizing new content ideas.
  
2. **Scripting and Pre-production**
    - Writing scripts, storyboards and planning production details.
  
3. **Production**
    - Actual filming, recording, or live streaming.
  
4. **Post-production**
    - Editing, VFX, and preparation for distribution.
  
5. **Content Calendar Management**
    - Planning and tracking content publishing schedules.

---

## Marketing and Audience Strategy

1. **Social Media**
    - Regular updates, audience interaction, and data analytics.
  
2. **SEO**
    - Keyword strategy for all content and meta descriptions.
  
3. **Collaborations and Partnerships**
    - Strategic alliances to increase reach and viewership.
  
4. **Feedback Loop**
    - Monitoring and acting on audience feedback.

---

## Financials

1. **Budgeting**
    - Detailed budgets for each show and operational expenses.
  
2. **Monetization Models**
    - Strategies for generating revenue, e.g., ads, sponsorships, merchandise.
  
3. **Revenue Tracking**
    - Regular tracking and reporting of income and expenses.



## Budget Breakdown

### Financial Projections

We aim for steady growth in both viewership and revenue streams. To keep track of our progress, the following Key Performance Indicators (KPIs) have been set:

- **Monthly Active Viewers**: Target of X% increase each month.
- **Engagement Rate**: Aim for a Y% engagement rate (likes, shares, comments per views).
- **Cost Per Episode**: Maintain at or below $Z.
- **Revenue Streams**: Diversify to at least N sources (e.g., ads, sponsorships, merchandise).

### Financial Reporting

- **Monthly Financial Reports**: To be reviewed during the first meeting of each month.
- **Quarterly Reviews**: In-depth review to assess KPI achievement and set goals for the next quarter.

---

### Crew Payment
- $X per week per crew member
  - Total for Y weeks: $X * Y

### Equipment & Software
- OBS (free)
- Virtual production studio software: $Z
- Additional plugins: $A

### Miscellaneous Costs
- Music and media licenses: $B
- Cloud storage: $C
- Backup hardware: $D

---

## Production Schedule

Our production schedule will be maintained in a live document accessible to all team members. This could be a shared Google Sheet or a project management tool like Asana or Trello. [Insert Link Here]


| Week  | Episode Topic    | Host  | Guests  | Editor  |
|-------|------------------|-------|---------|---------|
| 1     | Topic 1          | Name  | Name    | Name    |
| 2     | Topic 2          | Name  | Name    | Name    |
| ...   | ...              | ...   | ...     | ...     |

## Quality Control

1. **Content Guidelines**
    - Standards for content quality, ethics, and compliance.
  
2. **Quality Assurance Checks**
    - Regular audits to ensure all shows meet network standards.

---

## Meeting Agenda


- Weekly sync-up meeting to discuss the following:
  1. Review last week's episode
  2. Plan for next week's episode
  3. Discuss any technical challenges

## Network Programmer Meeting for Content Production

For an efficient 30-minute meeting, we'll focus on reviewing episodes, deciding on budget, allocation, production teams, and schedules.

### Pre-Meeting:

- **Agenda Distribution (at least 48 hours prior)**:
  - Ensure all team members have a copy of the meeting's objectives, expected outcomes, and pre-read materials.

- **Pre-read Materials**:
  - Include the latest episode statistics, upcoming production schedules, and any major technical updates or challenges.

### Meeting Structure:

#### Opening (2 minutes):

##### Opening Remarks:

> "Welcome, team. Today's meeting is crucial for shaping the upcoming episodes and ensuring the smooth running of our production process. Let's make the most out of the next 28 minutes."

#### Quick Check-in (3 minutes):

- Each team member briefly mentions a concern or an achievement regarding the last episode or upcoming plans.

#### Agenda Overview (1 minute):

- Brief outline of what will be discussed during the meeting.

#### Episode Review (4 minutes):

- A concise review of the last episode, focusing on key performance indicators like user engagement, visual and audio quality, and content relevance.

#### Priority Discussion Points (15 minutes):

- Segment into three 5-minute blocks:
  1. Budget and Allocation
  2. Production Teams and Roles
  3. Production Schedule and Upcoming Episodes

- Each segment starts with a 1-minute overview, followed by a 3-minute discussion, then a 1-minute summarization.

#### Decision Points & Voting (3 minutes):

- Key decisions such as finalizing the budget, confirming roles, and setting the production schedule.
- Utilize project management tools for instant voting or polling.

#### Action Items & Responsibilities (1 minute):

- Quick assignment of tasks and responsibilities based on the discussions and decisions made.

##### Closing Remarks (1 minute):

> "Thank you all for your insights and contributions. Let's make sure to follow through on our action items. Here's to another successful episode."

### Post-Meeting:

- **Minutes & Action Items Distribution**: Within 24 hours, a recap of the meeting and next steps should be sent out.

- **Follow-up**: A check-in meeting to gauge progress on the action items.

### General Tips:

- **Time-keeping**: Assign a timekeeper.
- **Stay On Topic**: Keep discussions focused on agenda items.
- **Feedback Loop**: Post-meeting feedback for continuous improvement.


### Possible Python Schedule Automation to change scenes

```python
import json
import schedule
import time
import requests

# Load your JSON schedule
with open('your_schedule_file.json', 'r') as file:
    data = json.load(file)

def change_scene(scene_name):
    url = "http://your_obs_websocket_server_address"  # Replace with OBS WebSocket URL
    data = {"scene-name": scene_name}
    
    try:
        response = requests.post(url, json=data)
        if response.status_code == 200:
            print(f"Scene changed to {scene_name}")
        else:
            print(f"Failed to change scene. Status code: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")

# Schedule the scene changes
for show in data['network']['shows']:
    schedule_time = show['schedule_time']
    title = show['title']
    # Convert schedule_time to your local timezone if necessary
    # schedule.every().day.at(local_schedule_time).do(change_scene, scene_name=title)

# Similar scheduling can be done for commercials, live_events, etc.

# Run the scheduler
while True:
    schedule.run_pending()
    time.sleep(1)


```

Implementation
Step 1: Parse the JSON Schedule
Load and parse a JSON file that contains your broadcasting schedule. This file should detail various shows, commercials, and events with their respective times.

Step 2: Extract Schedule Information
Extract schedule_time and title for each item in your JSON schedule. These will be used to set up the scene change timings in OBS.

Step 3: Schedule Tasks
Use Python's schedule module to set up tasks at the specified schedule_time from the JSON data. Each task triggers a function that sends a POST request to OBS WebSocket server to change the scene.

Step 4: Change OBS Scene
The script sends a POST request to the OBS WebSocket server at each scheduled time. This request instructs OBS to switch to the scene related to the current show or event.



---



