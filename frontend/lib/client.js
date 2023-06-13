import sanityClient from '@sanity/client'

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATA_SET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
    token: process.env.NEXT_PUBLIC_SANITY_STUDIO_TOKEN,
    apiVersion: "2021-10-21",
    useCdn: process.env.NODE_ENV === 'production',
}

export const client = sanityClient(config)