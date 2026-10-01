import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CodeIcon from '@mui/icons-material/Code'
import { Box, Container, Stack, Typography, useTheme as useMuiTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CodeLabel } from '../components/codeLabel'

export const About = () => {
  const { t } = useTranslation()
  const theme = useMuiTheme()
  const reveal = useScrollReveal<HTMLDivElement>()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box id='about' sx={{ width: '100%', py: { xs: '70px', md: '100px' } }}>
      <Container maxWidth={false} sx={{ maxWidth: '1500px', mx: 'auto', px: { xs: 2, sm: 3, md: 5 } }}>
        <Box ref={reveal.ref} className={`scroll-reveal ${reveal.isVisible ? 'visible' : ''}`} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.8fr 1.2fr' }, alignItems: 'center', gap: { xs: 4, md: 9 } }}>
          <Box
            sx={{
              minHeight: { xs: 230, sm: 270, md: 330 }, p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              borderRadius: '20px', border: '1px solid', borderColor: isDark ? 'rgba(196, 181, 253, 0.18)' : 'rgba(168, 85, 247, 0.16)',
              background: isDark ? 'linear-gradient(145deg, rgba(168, 85, 247, 0.19), rgba(15, 15, 21, 0.75))' : 'linear-gradient(145deg, #f5edff, #ffffff)',
              boxShadow: isDark ? 'none' : '0 16px 36px rgba(124, 58, 237, 0.08)',
            }}
          >
            <CodeLabel>{'profile.ts'}</CodeLabel>
            <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: { xs: 38, md: 48 }, my: 1.5 }} />
            <Box sx={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', fontSize: { xs: '0.82rem', sm: '0.93rem' }, lineHeight: 1.75, color: 'text.secondary' }}>
              <Typography component='div' sx={{ font: 'inherit', color: 'primary.main', fontWeight: 700 }}>const profile = {'{'}</Typography>
              <Typography component='div' sx={{ font: 'inherit', pl: 2 }}>role: <Box component='span' sx={{ color: 'text.primary' }}>'Backend + IA'</Box>,</Typography>
              <Typography component='div' sx={{ font: 'inherit', pl: 2 }}>status: <Box component='span' sx={{ color: 'text.primary' }}>'available'</Box>,</Typography>
              <Typography component='div' sx={{ font: 'inherit', color: 'primary.main', fontWeight: 700 }}>{'}'}</Typography>
            </Box>
            <Box sx={{ width: 72, height: 5, borderRadius: 4, bgcolor: 'primary.main' }} />
          </Box>

          <Box>
            <Typography sx={{ color: 'primary.main', fontWeight: 700, mb: 1, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {t('about.eyebrow')}
            </Typography>
            <Typography component='h2' sx={{ color: 'text.primary', fontWeight: 800, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, lineHeight: 1.08, letterSpacing: '-0.05em' }}>
              {t('about.title')}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mt: 2.5, maxWidth: 700, lineHeight: 1.75, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
              {t('about.description')}
            </Typography>
            <Stack direction='row' spacing={1.5} alignItems='flex-start' sx={{ mt: 3, maxWidth: 640 }}>
              <Box sx={{ display: 'grid', placeItems: 'center', width: 38, height: 38, flexShrink: 0, borderRadius: 2, bgcolor: 'rgba(168, 85, 247, 0.12)', color: 'primary.main' }}><CodeIcon fontSize='small' /></Box>
              <Box>
                <Typography sx={{ color: 'text.primary', fontWeight: 700, mb: 0.25 }}>{t('about.focusTitle')}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.55 }}>{t('about.focus')}</Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
