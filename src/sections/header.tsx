import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { Box, Button, Chip, Container, Stack, Typography, useTheme as useMuiTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SocialLinks } from '../components/socialLinks'
import { PROFILE, SOCIAL_LINKS } from '../config/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CodeLabel } from '../components/codeLabel'
import { DraggableInspector } from '../components/draggableInspector'

export const Header = () => {
  const theme = useMuiTheme()
  const { t } = useTranslation()
  const contentReveal = useScrollReveal<HTMLDivElement>(0.1)
  const imageReveal = useScrollReveal<HTMLDivElement>(0.1)
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      id='home'
      sx={{
        position: 'relative', isolation: 'isolate', width: '100%', overflow: 'hidden',
        background: isDark
          ? 'radial-gradient(circle at 12% 18%, rgba(168, 85, 247, 0.18), transparent 30%), radial-gradient(circle at 85% 54%, rgba(124, 58, 237, 0.16), transparent 27%)'
          : 'radial-gradient(circle at 12% 18%, rgba(168, 85, 247, 0.17), transparent 30%), radial-gradient(circle at 85% 54%, rgba(196, 181, 253, 0.5), transparent 27%)',
      }}
    >
      <Box
        className='hero-orb'
        sx={{
          position: 'absolute', zIndex: -1, width: { xs: 180, md: 260 }, height: { xs: 180, md: 260 },
          right: { xs: '-90px', md: '8%' }, top: { xs: '120px', md: '22%' }, borderRadius: '50%', filter: 'blur(2px)', opacity: 0.45,
          background: 'linear-gradient(135deg, rgba(192, 132, 252, 0.55), rgba(124, 58, 237, 0.04))',
        }}
      />
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1500px', mx: 'auto', px: { xs: 2, sm: 3, md: 5 }, minHeight: { md: 'min(760px, 100vh)' },
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: { xs: 5, md: 6, lg: 10 },
          pt: { xs: '150px', sm: '170px', md: '145px' }, pb: { xs: '85px', md: '105px' }, flexDirection: { xs: 'column-reverse', md: 'row' },
        }}
      >
        <Box
          ref={contentReveal.ref}
          className={`scroll-reveal ${contentReveal.isVisible ? 'visible' : ''}`}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, width: { xs: '100%', md: '56%' }, textAlign: { xs: 'center', md: 'left' } }}
        >
          <Chip
            label={t('header.availability')}
            size='small'
            sx={{
              mb: 2.5, px: 0.5, fontWeight: 600, color: 'primary.main',
              backgroundColor: isDark ? 'rgba(168, 85, 247, 0.12)' : 'rgba(168, 85, 247, 0.09)',
              border: '1px solid', borderColor: isDark ? 'rgba(196, 181, 253, 0.32)' : 'rgba(168, 85, 247, 0.22)',
              '& .MuiChip-label::before': { content: '""', display: 'inline-block', width: 7, height: 7, mr: 1, borderRadius: '50%', backgroundColor: '#4ade80', boxShadow: '0 0 0 3px rgba(74, 222, 128, 0.12)' },
            }}
          />
          <Box sx={{ mb: 1 }}><CodeLabel>{'<JudysonJustino />'}</CodeLabel></Box>
          <Typography variant='h5' component='p' sx={{ color: 'text.secondary', fontWeight: 600, mb: 0.5 }}>
            {t('header.greeting')}
          </Typography>
          <Typography component='h1' sx={{ fontWeight: 800, fontSize: { xs: '2.75rem', sm: '3.7rem', md: '4.5rem' }, lineHeight: 1.02, letterSpacing: '-0.055em', color: 'text.primary', mb: 2 }}>
            {t('header.name')}
          </Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.65, maxWidth: '600px', fontSize: { xs: '1rem', sm: '1.125rem' } }}>
            {t('header.role')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3.5, width: { xs: '100%', sm: 'auto' } }}>
            <Button href='#projects' variant='contained' endIcon={<ArrowDownwardIcon />} sx={{ px: 2.5, py: 1.2, fontWeight: 700, boxShadow: '0 10px 26px rgba(168, 85, 247, 0.26)' }}>
              {t('header.viewProjects')}
            </Button>
            <Button href={SOCIAL_LINKS.linkedIn} target='_blank' rel='noopener noreferrer' variant='outlined' sx={{ px: 2.5, py: 1.2, fontWeight: 700 }}>
              {t('header.contactMe')}
            </Button>
          </Stack>
          <SocialLinks />
        </Box>

        <Box ref={imageReveal.ref} className={`scroll-reveal delay-1 ${imageReveal.isVisible ? 'visible' : ''}`} sx={{ position: 'relative', width: { xs: '190px', sm: '250px', md: '380px' }, flexShrink: 0 }}>
          <Box sx={{ position: 'absolute', inset: { xs: '-12px 12px 12px -12px', md: '-18px 18px 18px -18px' }, borderRadius: '24px', border: '1px solid', borderColor: 'primary.main', opacity: 0.65, transform: 'rotate(-4deg)' }} />
          <Box
            component='img'
            src={PROFILE.image}
            alt={t('header.photoAlt')}
            sx={{
              position: 'relative', display: 'block', width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '20px',
              boxShadow: isDark ? '0 28px 65px rgba(0, 0, 0, 0.38)' : '0 28px 65px rgba(76, 29, 149, 0.2)',
              transition: 'transform 350ms ease, box-shadow 350ms ease',
              '&:hover': { transform: 'translateY(-6px) rotate(1deg)', boxShadow: '0 34px 70px rgba(124, 58, 237, 0.3)' },
            }}
          />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <DraggableInspector />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
