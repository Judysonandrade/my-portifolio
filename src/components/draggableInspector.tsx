import { useRef, useState, type PointerEvent } from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { Box, Typography, useTheme as useMuiTheme } from '@mui/material'

type Position = { x: number; y: number }

export const DraggableInspector = () => {
  const theme = useMuiTheme()
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ pointerX: 0, pointerY: 0, originX: 0, originY: 0 })

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    dragStart.current = { pointerX: event.clientX, pointerY: event.clientY, originX: position.x, originY: position.y }
    setIsDragging(true)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const nextX = dragStart.current.originX + event.clientX - dragStart.current.pointerX
    const nextY = dragStart.current.originY + event.clientY - dragStart.current.pointerY
    setPosition({ x: Math.max(-130, Math.min(180, nextX)), y: Math.max(-110, Math.min(105, nextY)) })
  }

  const stopDragging = () => setIsDragging(false)
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      aria-hidden='true'
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onDoubleClick={() => setPosition({ x: 0, y: 0 })}
      sx={{
        position: 'absolute', left: { md: '-88px', lg: '-110px' }, bottom: { md: '-44px', lg: '-54px' }, zIndex: 2,
        width: { md: 205, lg: 230 }, overflow: 'hidden', borderRadius: '14px',
        border: '1px solid', borderColor: isDark ? 'rgba(196, 181, 253, 0.28)' : 'rgba(168, 85, 247, 0.25)',
        backgroundColor: isDark ? 'rgba(15, 15, 21, 0.88)' : 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(12px)', boxShadow: '0 18px 40px rgba(55, 15, 96, 0.24)',
        transform: `translate3d(${position.x}px, ${position.y}px, 0) rotate(${isDragging ? '-1deg' : '0deg'})`,
        transition: isDragging ? 'none' : 'transform 220ms ease, box-shadow 220ms ease',
        cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'none', userSelect: 'none',
        '&:hover': { boxShadow: '0 22px 48px rgba(124, 58, 237, 0.3)' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 1.25, py: 0.8, borderBottom: '1px solid', borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.08)' }}>
        <Typography sx={{ color: 'primary.main', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', fontSize: '0.66rem', fontWeight: 700 }}>
          component-inspector.tsx
        </Typography>
        <DragIndicatorIcon sx={{ color: 'text.secondary', fontSize: 18 }} />
      </Box>
      <Box sx={{ p: 1.25, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', fontSize: { md: '0.67rem', lg: '0.72rem' }, lineHeight: 1.75 }}>
        <Typography component='div' sx={{ font: 'inherit', color: 'text.secondary' }}>// drag to reposition</Typography>
        <Typography component='div' sx={{ font: 'inherit', color: 'text.primary', mt: 0.35 }}>status: <Box component='span' sx={{ color: '#4ade80' }}>'available'</Box></Typography>
        <Typography component='div' sx={{ font: 'inherit', color: 'text.primary' }}>stack: <Box component='span' sx={{ color: 'primary.main' }}>['Python', 'Django', 'Golang', 'Automation']</Box></Typography>
      </Box>
    </Box>
  )
}
