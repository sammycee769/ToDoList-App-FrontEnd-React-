export function mockTaskManager() {
    return new Promise((resolve)=>{
        resolve([
           {"text": "Learn JavaScript",
            "completed": false
           },
           {"text": "Practice DOM Manipulation",
            "completed": false
           },
           {"text": "Build a mini project",
            "completed": false
           },
           {"text": "Revise CSS Flexbox",
            "completed": false
           }
        ])
    })
}