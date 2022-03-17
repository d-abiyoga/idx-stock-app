const colors = {
  primary: {
    main100: '#D3F8E9',
    main200: '#A7F1D4',
    main300: '#6EE7B7',
    main400: '#34D399',
    main500: '#10B981',
    main600: '#059669',
    main700: '#047857',
    main800: '#03543D',
  },
  slate: {
    slate100: '#F1F5F9',
    slate200: '#E2E8F0',
    slate300: '#CBD5E1',
    slate400: '#94A3B8',
    slate500: '#64748B',
    slate600: '#475569',
    slate700: '#334155',
    slate800: '#1E293B',
    slate900: '#0F172A',
  },
  warning: {
    main300: '#FDE047',
    main400: '#EAB308',
  },
  error: {
    error100: '#FEE2E2',
    error400: '#F87171',
    error500: '#EF4444',
    error600: '#DC2626',
    error800: '#991B1B',
  },
};

export const theme = {
  light: {
    bgColor: colors.slate.slate100,
    primary: colors.primary.main500,
    primaryBtnHovered: colors.primary.main600,
    primaryBtnActive: colors.primary.main400,
    secondary: colors.primary.main700,
    bgBox: colors.primary.main100,
  },
};
