import React from "react";

interface Props {
  frets: number[];
}

export default function GuitarPanel({ frets }: Props) {
  const stringNames = ["E", "B", "G", "D", "A", "E"];
  const fretCount = 12;
  const fretMarkers = [3, 5, 7, 9, 12];

  const containerHeight = 140;
  const margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 25
  };

  // 计算实际可用高度
  const fretboardHeight = containerHeight - margin.top - margin.bottom;
  const stringSpacing = fretboardHeight / 5;

  const guitarStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px',
  };

  return (
    <div style={guitarStyle}>
      <div style={{ width: '100%', padding: '0 10px' }}>
        <div style={{ 
          width: '100%',
          height: containerHeight,
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* 弦名称 */}
          <div style={{
            position: 'absolute',
            top: margin.top,
            left: 0,
            width: margin.left,
            height: fretboardHeight,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            {stringNames.map((name, i) => (
              <div
                key={`string-${i}`}
                style={{
                  height: '0px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: '5px',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              >
                {name}
              </div>
            ))}
          </div>

          {/* 指板主体 */}
          <div style={{
            position: 'absolute',
            top: margin.top,
            left: margin.left,
            right: margin.right,
            height: fretboardHeight,
            background: '#2C1810',
            borderRadius: '1px',
            display: 'flex'
          }}>
            {/* 品格 */}
            {Array.from({ length: fretCount + 1 }).map((_, i) => (
              <div
                key={`fret-${i}`}
                style={{
                  flex: i === 0 ? '0 0 5px' : '1',
                  borderRight: i === 0 ? '2px solid #DDD' : '1px solid #987554',
                  position: 'relative',
                  background: i === 0 ? '#F5F5F0' : 'transparent',
                  boxShadow: i === 0 ? '2px 0 4px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                {/* 品格标记（圆点） */}
                {fretMarkers.includes(i) && (
                  i === 12 ? (
                    <>
                      <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '33%',
                        width: '6px',
                        height: '6px',
                        background: '#D4D4D4',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.6
                      }} />
                      <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '67%',
                        width: '6px',
                        height: '6px',
                        background: '#D4D4D4',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.6
                      }} />
                    </>
                  ) : (
                    <div style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: '6px',
                      height: '6px',
                      background: '#D4D4D4',
                      borderRadius: '50%',
                      transform: 'translate(-50%, -50%)',
                      opacity: 0.6
                    }} />
                  )
                )}
              </div>
            ))}

            {/* 弦 */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`string-${i}`}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: i * stringSpacing,
                  height: `${0.7 + i * 0.5}px`,
                  background: `rgba(255,255,255,${0.3 + i * 0.03})`,
                  pointerEvents: 'none',
                  boxShadow: `0 0 1px rgba(255,255,255,0.2)`
                }}
              />
            ))}

            {/* 按位标记 */}
            {frets.map((fret, stringIndex) => {
              if (fret === 0) return null;
              const fretWidth = 'calc((100% - 5px) / 12)';
              const leftPos = `calc(5px + ${fret - 1} * ((100% - 5px) / 12))`;
              
              return (
                <div
                  key={`marker-${stringIndex}`}
                  style={{
                    position: 'absolute',
                    left: leftPos,
                    top: stringIndex * stringSpacing - 7,
                    width: fretWidth,
                    height: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none'
                  }}
                >
                  <div style={{
                    width: '14px',
                    height: '14px',
                    background: '#4A90E2',
                    border: '1px solid white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '11px'
                  }}>
                    {fret}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
