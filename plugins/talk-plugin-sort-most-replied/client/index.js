import translations from './translations.yml';
import {createSortOption} from 'plugin-api/beta/client/factories';
import {t} from 'plugin-api/beta/client/services';

const SortOption = createSortOption(
  () => t('talk-plugin-sort-most-replied.label'),
  {sortBy: 'REPLIES', sortOrder: 'DESC'},
);

/**
 * This plugin depends on talk-plugin-viewing-options.
 */

export default {
  translations,
  slots: {
    viewingOptionsSort: [SortOption]
  }
};
