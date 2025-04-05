export interface Experience {
    content: {
        title: string
        experience_3: {
            jobTitle: string
            startDate: string
            endDate: string
            bullets: {
                firstBullet: string
                secondBullet: {
                    firstBullet: string
                    subList: {
                        firstBullet: string
                        secondBullet: string
                    }
                }
            }
        }
        experience_2: {
            jobTitle: string
            startDate: string
            endDate: string
            bullets: {
                firstBullet: string
                secondBullet: string
                thirdBullet: string
            }
        }
        experience: {
            jobTitle: string
            startDate: string
            endDate: string
            bullets: {
                firstBullet: string
                secondBullet: string
                thirdBullet: string
            }
        }
    }
}
