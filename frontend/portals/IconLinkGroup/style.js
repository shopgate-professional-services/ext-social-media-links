import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { colorIcon, colorCircle } from '../../config';

const { colors } = themeConfig;

const container = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  margin: '16px 0',
}).toString();

const linkGroup = css({
  listStyle: 'none',
  padding: '6px 0',
  margin: 0,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
}).toString();

const link = css({
  justifyItems: 'center',
}).toString();

const icon = css({
  height: '24px',
  width: '24px',
  color: colorIcon || colors.ctaContrast,
}).toString();

const circle = css({
  width: '40px',
  height: '40px',
  backgroundColor: colorCircle || colors.cta,
  borderRadius: '50%',
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}).toString();

export default {
  container,
  linkGroup,
  link,
  icon,
  circle,
};
