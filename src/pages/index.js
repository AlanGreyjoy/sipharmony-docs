import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Heading from '@theme/Heading'
import styles from './index.module.css'
import { Alert, Box, Button, Grid, Typography } from '@mui/material'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Grid container spacing={6} alignItems={'center'} justifyContent={'center'} height={'calc(100vh)'}>
      <Grid item xs={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            textAlign: 'center',
          }}
        >
          <Typography variant="h2">{siteConfig.title}</Typography>
          <Typography variant="h6">{siteConfig.tagline}</Typography>
          <Box
            sx={{
              mt: 2,
            }}
          >
            <Button color="primary" size="large" href="/docs/getting-started">
              Get Started
            </Button>
          </Box>

          <Alert severity="info" sx={{ mt: 2, width: 500, marginLeft: 'auto', marginRight: 'auto' }}>
            This is a constant work in progress. If you need help, please reach out to us on{' '}
            <Link
              href="https://discord.com/invite/H4sbDsd7Yp"
              target="_blank"
              style={{ fontSize: 18, fontWeight: 800 }}
            >
              Discord
            </Link>{' '}
            for immediate assistance.
          </Alert>
        </Box>
      </Grid>
    </Grid>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Help documentation for the Sipharmony platform">
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  )
}
