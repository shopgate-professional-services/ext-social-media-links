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
  display: 'flex',
  justifyItems: 'center',
  justifyContent: 'center',
  alignItems: 'center',
}).toString();

const icon = css({
  height: '24px',
  width: '24px',
  color: colorIcon || colors.ctaContrast,
}).toString();

const circle = css({
  display: 'flex',
  position: 'relative',
  width: '40px',
  height: '40px',
  backgroundColor: colorCircle || colors.cta,
  borderRadius: '50%',
}).toString();

export default {
  container,
  linkGroup,
  link,
  icon,
  circle,
};
