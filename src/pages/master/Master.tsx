import React from 'react';
import { Gallery } from '../../components/Gallery/Gallery';
import { MasterPage } from './Master.styles';

export const Master = () => {
  return (
    <MasterPage>
      {/* TODO: Se puede usar i18n desde el arranque de un proyecto y así olvidarse de la internacionalización. */}
      <h1>Películas Populares</h1>
      <Gallery />
    </MasterPage>
  );
}