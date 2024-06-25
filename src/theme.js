
const theme = {
  colors: {
    mainBlue: '#1677FF',  
    subBlue: '#F0F5FF',  // 연한 파란색 박스들
    White: '#FFFFFF',  // 텍스트, 박스 배경
    Black: '#000000',
    backGray: '#FAFAFA',  // gray backgroud
    MessageGray: '#F6F6F9', // (e.g. 수분을 기록해보세요, 3개의 약이 남았어요)
    baseRed: '#FFF1F0', // e.g. '위험' 
    baseYellow: '#FFF7E6', // e.g. '조심'
    baseGreen: '#F6FFED', // e.g. '안전'
    NavBar: '#8B8B91', // Navigation Bar Icons & Text
    iconBlueCheck: '#ADC6FF', // Blue Check Icon
    iconBlueMain: '#4096FF',  // Default Icon Colors
    textBlue: '#597EF7', // selected date
    textRed: '#FF4D4F', // e.g. '위험', 빨산색 느낌표 아이콘 Base Color
    textOrange: '#FA8C16', // e.g. '조심', 노란색 느낌표 아이콘 Base Color
    textGreen: '#1BD644', // e.g. '안전', 초록색 체크 아이콘 Base Color
    textGray: '#B9B9BE', // e.g. '수분', '혈압'
    textDarkGray: '#5D5D62', // e.g. '수분을 기록해보세요!', '총 수분량'
  },
  fonts: {
    Semibold_20: {
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 'width * 0.051', // 20px proportional to width
      lineHeight: 'width * 0.069', // 27px proportional to width
    },   
    Bold_16: {
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 'width * 0.041', // 16px proportional to width
      lineHeight: 'width * 0.056', // 22px proportional to width
    },
    Semibold_16: {
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 600,  // semibold
      fontSize: 'width * 0.041', // 16px proportional to width
      lineHeight: 'width * 0.056', // 22px proportional to width
    },  
    DisplaySemibold_16: {
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 'width * 0.041', // 16px proportional to width
      lineHeight: 'width * 0.062', // 24px proportional to width
    },    
    Medium_16: {
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 'width * 0.041', // 16px proportional to width
      lineHeight: 'width * 0.067', // 27px proportional to width
    },    
    Bold_14: {
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 'width * 0.036', // 14px proportional to width
      lineHeight: 'width * 0.056', // 22px proportional to width
    },
    Semibold_14: {
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 'width * 0.036', // 14px proportional to width
      lineHeight: 'width * 0.072', // 28px proportional to width
    }, 
    DisplaySemibold_14: {
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 600,  // display semibold
      fontSize: 'width * 0.036', // 14px proportional to width
      lineHeight: 'width * 0.056', // 22px proportional to width
    },
    Regular_14: {
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 400,  // regular
      fontSize: 'width * 0.036', // 14px proportional to width
      lineHeight: 'width * 0.056', // 22px proportional to width
    },
    Bold_12: {
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 700,  // bold
      fontSize: 'width * 0.031', // 12px proportional to width
      lineHeight: 'width * 0.041', // 16px proportional to width
    },
    Semibold_12: {
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 600,  // semibold
      fontSize: 'width * 0.031', // 12px proportional to width
      lineHeight: 'width * 0.041', // 16px proportional to width
    },
    Medium_12: {
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 500,  // medium
      fontSize: 'width * 0.031', // 12px proportional to width
      lineHeight: 'width * 0.041', // 16px proportional to width
      color: '#5D5D62', // grayscale/gray-3 color
    },
    Regular_12: {
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 400, // regular
      fontSize: 'width * 0.031', // 12px proportional to width
      lineHeight: 'width * 0.041', // 16px proportional to width
    },
    Semibold_8: {
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 'width * 0.021', // 8px proportional to width
      lineHeight: 'width * 0.028', // 11px proportional to width
    },
    Regular_8: {
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'width * 0.021', // 8px proportional to width
      lineHeight: 'width * 0.028', // 11px proportional to width
    },    
  }
};

export default theme;
