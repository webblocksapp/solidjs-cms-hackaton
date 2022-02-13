import { SelectProps } from '@components';

export const SELECT2_OPTIONS = [
  'ajax',
  'allowClear',
  'amdBase',
  'amdLanguageBase',
  'closeOnSelect',
  'containerCss',
  'containerCssClass',
  'data',
  'dataAdapter',
  'debug',
  'dir',
  'disabled',
  'dropdownAdapter',
  'dropdownAutoWidth',
  'dropdownCss',
  'dropdownCssClass',
  'dropdownParent',
  'escapeMarkup',
  'initSelection',
  'language',
  'matcher',
  'maximumInputLength',
  'maximumSelectionLength',
  'minimumInputLength',
  'minimumResultsForSearch',
  'multiple',
  'placeholder',
  'resultsAdapter',
  'selectionAdapter',
  'selectOnClose',
  'sorter',
  'tags',
  'templateResult',
  'templateSelection',
  'theme',
  'tokenizer',
  'tokenSeparators',
  'width',
  'createTag',
  'insertTag',
] as unknown as (keyof SelectProps | 'children')[];
