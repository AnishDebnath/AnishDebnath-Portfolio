import { CaseStudy, CaseStudyArticle } from '../../types';
import { auroraLegal } from './auroraLegal';
import { electricMobility } from './electricMobility';
import { virtualGym } from './virtualGym';
import { tropicalEscape } from './tropicalEscape';
import { beyondAesthetics } from './beyondAesthetics';
import { conceptToPixel } from './conceptToPixel';
import { designingForConversion } from './designingForConversion';
import { minimalistUi } from './minimalistUi';

export const CASE_STUDIES: CaseStudy[] = [
  auroraLegal,
  electricMobility,
  virtualGym,
  tropicalEscape
];

export const CASE_STUDY_ARTICLES: CaseStudyArticle[] = [
  beyondAesthetics,
  conceptToPixel,
  designingForConversion,
  minimalistUi
];