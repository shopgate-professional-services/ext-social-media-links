import React from 'react';
import PropTypes from 'prop-types';
import { Link, Icon } from '@shopgate/engage/components';
import styles from './style';
import { visibleInPortals, links } from '../../config';

/**
 * IconLinkGroup component
 * Renders a group of icon links.
 *
 * @param {Object} props - Component props
 * @param {string} props.name - Portal name used to determine visibility
 * @returns {JSX.Element|null} Rendered icon link group or null if not visible
 */
const IconLinkGroup = ({ name }) => {
  if (!links || !visibleInPortals.includes(name)) {
    return null;
  }

  return (
    <div className={`${styles.container} --social-media-container`} role="navigation">
      <ul className={styles.linkGroup}>
        {links.map(({ label, url, iconSvgContent }) => (
          url && (
            <li key={label} className={`${styles.circle} --social-media-link`}>
              <Link
                href={url}
                state={{ target: '_blank' }}
                tabIndex={0}
                className={styles.link}
                aria-label={label}
              >
                <Icon
                  content={iconSvgContent}
                  viewBox="0 0 24 24"
                  className={styles.icon}
                  aria-hidden
                />
              </Link>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

IconLinkGroup.propTypes = {
  name: PropTypes.string.isRequired,
};

export default IconLinkGroup;
