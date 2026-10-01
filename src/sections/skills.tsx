import { Box, Container, Grid, Typography, useTheme as useMuiTheme } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faDocker, faGolang, faReact, faJava, faGithub} from '@fortawesome/free-brands-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CodeLabel } from '../components/codeLabel'
import { faBrain } from '@fortawesome/free-solid-svg-icons'

type Skill = { icon: IconDefinition; name: string }

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const theme = useMuiTheme()
  const reveal = useScrollReveal<HTMLDivElement>(0.2)
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box ref={reveal.ref} className={`scroll-reveal ${reveal.isVisible ? 'visible' : ''}`} sx={{ width: '100%', transitionDelay: `${index * 90}ms` }}>
      <Box
        sx={{
          minHeight: { xs: 170, sm: 200, md: 220 }, borderRadius: '16px', padding: { xs: 2, sm: 2.5, md: 3 },
          alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1.5,
          background: isDark ? 'linear-gradient(145deg, rgba(168, 85, 247, 0.15), rgba(15, 15, 21, 0.8))' : 'linear-gradient(145deg, #faf5ff, #ffffff)',
          border: '1px solid', borderColor: isDark ? 'rgba(196, 181, 253, 0.14)' : 'rgba(168, 85, 247, 0.15)',
          transition: 'transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease',
          '&:hover': {
            transform: 'translateY(-7px)', borderColor: 'rgba(168, 85, 247, 0.58)', boxShadow: '0 18px 36px rgba(124, 58, 237, 0.18)',
            '& .skill-icon': { transform: 'scale(1.12) rotate(-4deg)' },
          },
        }}
      >
        <Box className='skill-icon' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: { xs: '46px', sm: '58px', md: '66px' }, color: 'primary.main', transition: 'transform 300ms ease' }}>
          <FontAwesomeIcon icon={skill.icon} />
        </Box>
        <Typography variant='body1' sx={{ color: 'text.primary', textAlign: 'center', fontWeight: 700 }}>
          {skill.name}
        </Typography>
      </Box>
    </Box>
  )
}

export const Habilidade = () => {
  const { t } = useTranslation()
  const titleReveal = useScrollReveal<HTMLDivElement>()
  const skills: Skill[] = [
    { icon: faPython, name: 'Python' }, { icon: faDocker, name: 'Docker' },
    { icon: faGolang, name: 'Golang'}, { icon: faReact, name: 'React' }, { icon: faJava, name: 'Java' }, { icon: faGithub, name: 'GitHub' },
    { icon: faBrain, name: 'Machine Learning' }, { icon: faBrain, name: 'Deep Learning' },
  ]

  return (
    <Box id='skills' sx={{ width: '100%', py: { xs: '70px', md: '100px' } }}>
      <Container maxWidth={false} sx={{ maxWidth: '1500px', mx: 'auto', px: { xs: 2, sm: 3, md: 5 } }}>
        <Box ref={titleReveal.ref} className={`scroll-reveal ${titleReveal.isVisible ? 'visible' : ''}`} sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <CodeLabel>{'<Skills />'}</CodeLabel>
          <Typography component='h2' sx={{ color: 'text.primary', fontWeight: 800, mt: 1.5, mb: 1, fontSize: { xs: '1.8rem', sm: '2.1rem' } }}>
            {t('skills.title')}
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto', fontSize: { xs: '14px', sm: '16px' } }}>
            {t('skills.subtitle')}
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent='center'>
          {skills.map((skill, index) => (
            <Grid key={skill.name} size={{ xs: 6, sm: 4, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <SkillCard skill={skill} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
