import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import colors from '../colors';

/*

  If you want to add new icons
  Please add icon in alphabetical order

  -- add_circle
  -- add
  -- box_arrow_box
  -- briefcase
  -- check_circle
  -- check_filled_circle
  -- check_filled_square
  -- check_list
  -- check
  -- cheveron
  -- close
  -- create
  -- download
  -- edit
  -- error
  -- print
  -- processing
  -- queued
  -- refresh
  -- returned
  -- search
  -- setting
  -- synapse_circle_logo
  -- trash_bin
  -- two_boxes_in_doc
  -- user_in_doc
  -- user
  -- warning_in_paper
  -- warning
  -- x_filled_circle

*/

const changeColor = color => {
  return `
    *,
    g,
    path {
      fill: ${color};
    }
  `;
};

const changeColorWhenHover = hoverColor => {
  return `
    &:hover {
      cursor: pointer;
      ${changeColor(hoverColor)};
    }
  `;
};

const changeColorWhenActive = activeColor => {
  return `
    &:active {
      cursor: pointer;
      ${changeColor(activeColor)};
    }
  `;
};

const rotateCounterClockwise = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
`;

const widthAndHeightEqualSize = `props.size; height: props.size;`;

const StyledSvg = styled.svg`
  display: block;

  ${props => props.size && css`${widthAndHeightEqualSize};`};
  ${props => props.color && css`${changeColor(props.color)};`};
  ${props => props.hoverColor && css`${changeColorWhenHover(props.hoverColor)};`};
  ${props => props.activeColor && css`${changeColorWhenActive(props.activeColor)};`};
  ${props =>
    props.rotate_ccw_slow && css`animation: ${rotateCounterClockwise} 10s linear infinite;`};
  ${props =>
    props.rotate_ccw_normal && css`animation: ${rotateCounterClockwise} 2.5s linear infinite;`};
  ${props =>
    props.rotate_ccw_fast && css`animation: ${rotateCounterClockwise} 1s linear infinite;`};
  ${props => props.right && css`transform: rotate(90deg);`};
  ${props => props.down && css`transform: rotate(180deg);`};
  ${props => props.left && css`transform: rotate(270deg);`};
`;

export const add_circle = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>add_circle</title>
      <path
        fill={props.fillColor || '#fff'}
        stroke={props.borderColor || '#000'}
        strokeWidth="1"
        strokeMiterlimit="4"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        d="M31 16c0 8.284-6.716 15-15 15s-15-6.716-15-15c0-8.284 6.716-15 15-15s15 6.716 15 15z"
      />
      <path
        fill="#000"
        d="M24.203 13.656h-5.859v-5.859c0-0.645-0.527-1.172-1.172-1.172h-2.344c-0.645 0-1.172 0.527-1.172 1.172v5.859h-5.859c-0.645 0-1.172 0.527-1.172 1.172v2.344c0 0.645 0.527 1.172 1.172 1.172h5.859v5.859c0 0.645 0.527 1.172 1.172 1.172h2.344c0.645 0 1.172-0.527 1.172-1.172v-5.859h5.859c0.645 0 1.172-0.527 1.172-1.172v-2.344c0-0.645-0.527-1.172-1.172-1.172z"
      />
    </StyledSvg>
  );
};

export const add = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>add</title>
      <path d="M30 12h-10v-10c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v10h-10c-1.1 0-2 0.9-2 2v4c0 1.1 0.9 2 2 2h10v10c0 1.1 0.9 2 2 2h4c1.1 0 2-0.9 2-2v-10h10c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2z" />
    </StyledSvg>
  );
};

export const box_arrow_box = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>box_arrow_box</title>
      <path d="M21.551 11.655v8.956c0 0.412 0.329 0.746 0.735 0.746h8.816c0.405 0 0.735-0.334 0.735-0.746v-8.956c0-0.412-0.329-0.746-0.735-0.746h-8.816c-0.406 0-0.735 0.334-0.735 0.746z" />
      <path d="M0 11.655v8.956c0 0.412 0.324 0.746 0.723 0.746h8.679c0.399 0 0.723-0.334 0.723-0.746v-3.732h7.12l-1.658 1.712c-0.282 0.291-0.282 0.764 0 1.055s0.741 0.291 1.023 0l2.893-2.985c0.023-0.025 0.033-0.057 0.053-0.084 0.038-0.051 0.078-0.1 0.101-0.16 0.038-0.091 0.056-0.188 0.056-0.285s-0.019-0.194-0.056-0.285c-0.033-0.084-0.084-0.155-0.142-0.221-0.004-0.004-0.972-1.006-2.906-3.006-0.282-0.291-0.741-0.291-1.023 0s-0.282 0.764 0 1.055l1.658 1.711h-7.12v-3.732c0-0.412-0.324-0.746-0.723-0.746h-8.679c-0.399 0-0.723 0.334-0.723 0.746z" />
    </StyledSvg>
  );
};

export const briefcase = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>briefcase</title>
      <path d="M19.986 21.103c0 0.313-0.113 0.585-0.339 0.814s-0.494 0.344-0.803 0.344h-5.71c-0.309 0-0.577-0.114-0.803-0.344s-0.339-0.5-0.339-0.814v-2.892h-11.991v8.678c0 0.795 0.279 1.476 0.839 2.043s1.231 0.85 2.017 0.85h26.267c0.785 0 1.457-0.283 2.016-0.85s0.839-1.247 0.839-2.043v-8.678h-11.991v2.892z" />
      <path d="M13.091 18.211h5.909v2.314h-5.909v-2.314z" />
      <path d="M31.138 7.478c-0.559-0.567-1.231-0.85-2.016-0.85h-6.281v-2.893c0-0.482-0.166-0.892-0.5-1.229s-0.738-0.506-1.213-0.506h-10.278c-0.476 0-0.88 0.169-1.213 0.506s-0.5 0.747-0.5 1.229v2.893h-6.281c-0.785 0-1.457 0.283-2.017 0.85s-0.839 1.247-0.839 2.043v6.942h31.977v-6.942c0-0.796-0.279-1.476-0.839-2.043zM20.556 6.628h-9.136v-2.314h9.136v2.314z" />
    </StyledSvg>
  );
};

export const check_circle = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>check_circle</title>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="1"
        strokeMiterlimit="4"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        d="M31 16c0 8.284-6.716 15-15 15s-15-6.716-15-15c0-8.284 6.716-15 15-15s15 6.716 15 15z"
      />
      <path d="M24.297 7.758c-0.252-0.261-0.662-0.261-0.912 0l-9.61 9.858c-0.252 0.263-0.663 0.263-0.913 0l-4.211-4.419c-0.125-0.131-0.288-0.196-0.452-0.197-0.166-0.001-0.334 0.064-0.461 0.197l-1.861 1.724c-0.124 0.131-0.191 0.295-0.191 0.466s0.067 0.352 0.192 0.482l4.246 4.592c0.251 0.262 0.663 0.687 0.913 0.948l1.826 1.897c0.251 0.26 0.661 0.26 0.913 0l12.347-12.703c0.252-0.26 0.252-0.688 0-0.949l-1.826-1.896z" />
    </StyledSvg>
  );
};

export const check_filled_circle = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>check_filled_circle</title>
      <path
        fill={props.fillColor || '#000'}
        stroke={props.borderColor || '#000'}
        strokeWidth="1"
        strokeMiterlimit="4"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        d="M31 16c0 8.284-6.716 15-15 15s-15-6.716-15-15c0-8.284 6.716-15 15-15s15 6.716 15 15z"
      />
      <path
        style={{ fill: '#FFF' }}
        d="M24.295 7.674c-0.252-0.255-0.662-0.255-0.912 0l-9.609 9.636c-0.252 0.257-0.663 0.257-0.913 0l-4.21-4.32c-0.125-0.128-0.288-0.191-0.452-0.192-0.166-0.001-0.334 0.062-0.461 0.192l-1.861 1.685c-0.124 0.128-0.191 0.288-0.191 0.455s0.067 0.344 0.192 0.471l4.245 4.489c0.251 0.256 0.663 0.672 0.913 0.927l1.825 1.854c0.251 0.254 0.661 0.254 0.913 0l12.346-12.417c0.252-0.255 0.252-0.673 0-0.927l-1.826-1.853z"
      />
    </StyledSvg>
  );
};

export const check_filled_square = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>check_filled_square</title>
      <path fill={props.fillColor || '#000'} d="M0 0h32v32h-32v-32z" />
      <path
        style={{ fill: '#FFF' }}
        d="M24.295 7.674c-0.252-0.255-0.662-0.255-0.912 0l-9.609 9.636c-0.252 0.257-0.663 0.257-0.913 0l-4.21-4.32c-0.125-0.128-0.288-0.191-0.452-0.192-0.166-0.001-0.334 0.062-0.461 0.192l-1.861 1.685c-0.124 0.128-0.191 0.288-0.191 0.455s0.067 0.344 0.192 0.471l4.245 4.489c0.251 0.256 0.663 0.672 0.913 0.927l1.825 1.854c0.251 0.254 0.661 0.254 0.913 0l12.346-12.417c0.252-0.255 0.252-0.673 0-0.927l-1.826-1.853z"
      />
    </StyledSvg>
  );
};

export const check_list = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>check_list</title>
      <path d="M21.067 3.118v1.177c0 0.6-0.466 1.084-1.042 1.084h-8.156c-0.129 0-0.254-0.025-0.368-0.071-0.393-0.153-0.673-0.548-0.673-1.013v-1.177c0-0.6 0.467-1.085 1.042-1.085h0.716v-0.947c0-0.599 0.466-1.085 1.042-1.085h4.643c0.354 0 0.666 0.184 0.852 0.466 0.118 0.175 0.188 0.389 0.188 0.62v0.947h0.715c0.576 0 1.042 0.485 1.042 1.085z" />
      <path d="M9.976 3.556c-0.002 0.027-0.002 0.055-0.002 0.082v1.373c0 0.542 0.327 1.003 0.786 1.181 0.134 0.054 0.279 0.083 0.43 0.083h9.515c0.672 0 1.216-0.564 1.216-1.264v-1.373c0-0.028-0.001-0.055-0.003-0.082h4.976c0.552 0 1 0.448 1 1v26.444c0 0.552-0.448 1-1 1h-21.893c-0.552 0-1-0.448-1-1v-26.444c0-0.552 0.448-1 1-1h4.976zM9.954 9.617c0.088-0.091 0.088-0.238 0-0.33l-0.316-0.329c-0.087-0.091-0.229-0.091-0.315 0l-2.084 2.17-0.742-0.775c-0.087-0.091-0.23-0.091-0.317 0l-0.407 0.424c-0.087 0.091-0.087 0.24 0 0.331l1.219 1.269c0.087 0.091 0.229 0.091 0.315 0l0.048-0.050 0.359-0.376 2.241-2.334zM10.827 9.778v1.778h14.507v-1.778h-14.507zM9.954 14.95c0.088-0.091 0.088-0.238 0-0.33l-0.316-0.329c-0.087-0.091-0.229-0.091-0.315 0l-2.084 2.17-0.742-0.775c-0.087-0.091-0.23-0.091-0.317 0l-0.407 0.424c-0.087 0.091-0.087 0.24 0 0.331l1.219 1.269c0.087 0.091 0.229 0.091 0.315 0l0.048-0.050 0.359-0.376 2.241-2.334zM10.827 15.111v1.778h14.507v-1.778h-14.507zM9.954 20.283c0.088-0.091 0.088-0.238 0-0.33l-0.316-0.329c-0.087-0.091-0.229-0.091-0.315 0l-2.084 2.17-0.742-0.775c-0.087-0.091-0.23-0.091-0.317 0l-0.407 0.424c-0.087 0.091-0.087 0.24 0 0.331l1.219 1.269c0.087 0.091 0.229 0.091 0.315 0l0.048-0.050 0.359-0.376 2.241-2.334zM10.827 20.444v1.778h14.507v-1.778h-14.507zM9.954 25.617c0.088-0.091 0.088-0.238 0-0.33l-0.316-0.329c-0.087-0.091-0.229-0.091-0.315 0l-2.084 2.17-0.742-0.775c-0.087-0.091-0.23-0.091-0.317 0l-0.407 0.424c-0.087 0.091-0.087 0.24 0 0.331l1.219 1.269c0.087 0.091 0.229 0.091 0.315 0l0.048-0.050 0.359-0.376 2.241-2.334zM10.827 25.778v1.778h14.507v-1.778h-14.507z" />
    </StyledSvg>
  );
};

export const check = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>check</title>
      <path d="M28.869 4.14c-0.391-0.399-1.027-0.399-1.415 0l-14.908 15.071c-0.391 0.402-1.028 0.402-1.416 0l-6.532-6.756c-0.193-0.2-0.447-0.299-0.701-0.301-0.257-0.001-0.519 0.098-0.715 0.301l-2.887 2.635c-0.192 0.2-0.296 0.451-0.296 0.712 0 0.263 0.104 0.538 0.297 0.737l6.587 7.020c0.389 0.401 1.028 1.051 1.416 1.449l2.832 2.899c0.389 0.397 1.025 0.397 1.416 0l19.155-19.419c0.391-0.398 0.391-1.052 0-1.45l-2.833-2.898z" />
    </StyledSvg>
  );
};

export const cheveron = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>cheveron</title>
      <path d="M28.24 26l3.76-3.806-16-16.194-16 16.194 3.76 3.806 12.24-12.362z" />
    </StyledSvg>
  );
};

export const close = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>close</title>
      <path d="M32 3.222l-3.222-3.222-12.778 12.778-12.778-12.778-3.222 3.222 12.778 12.778-12.778 12.778 3.222 3.222 12.778-12.778 12.778 12.778 3.222-3.222-12.778-12.778z" />
    </StyledSvg>
  );
};

export const create = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>create</title>
      <path d="M16 32c-8.837 0-16-7.163-16-16s7.163-16 16-16c8.837 0 16 7.163 16 16s-7.163 16-16 16zM7.2 20.003v3.789h3.789l11.176-11.176-3.789-3.789-11.176 11.176zM25.096 9.685c0.394-0.394 0.394-1.031 0-1.425l-2.365-2.365c-0.394-0.394-1.031-0.394-1.425 0l-1.849 1.849 3.789 3.789 1.849-1.849z" />
    </StyledSvg>
  );
};

export const download = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>download</title>
      <path d="M24 24c0-0.625-0.518-1.143-1.143-1.143s-1.143 0.518-1.143 1.143 0.518 1.143 1.143 1.143 1.143-0.518 1.143-1.143zM28.571 24c0-0.625-0.518-1.143-1.143-1.143s-1.143 0.518-1.143 1.143 0.518 1.143 1.143 1.143 1.143-0.518 1.143-1.143zM30.857 20v5.714c0 0.946-0.768 1.714-1.714 1.714h-26.286c-0.946 0-1.714-0.768-1.714-1.714v-5.714c0-0.946 0.768-1.714 1.714-1.714h8.304l2.41 2.429c0.661 0.642 1.518 1 2.429 1s1.768-0.358 2.429-1l2.429-2.429h8.286c0.946 0 1.714 0.768 1.714 1.714zM25.054 9.839c0.178 0.429 0.089 0.928-0.25 1.25l-8 8c-0.214 0.232-0.518 0.339-0.803 0.339s-0.59-0.107-0.803-0.339l-8-8c-0.339-0.321-0.429-0.822-0.25-1.25 0.178-0.41 0.59-0.696 1.054-0.696h4.571v-8c0-0.625 0.518-1.143 1.143-1.143h4.571c0.625 0 1.143 0.518 1.143 1.143v8h4.571c0.464 0 0.875 0.286 1.054 0.696z" />
    </StyledSvg>
  );
};

export const edit = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>edit</title>
      <path d="M30.963 4.624l-3.584-3.579c-0.37-0.37-0.857-0.555-1.342-0.555s-0.971 0.185-1.342 0.555l-2.867 2.859 6.268 6.257 2.867-2.858c0.741-0.74 0.741-1.941 0-2.678z" />
      <path d="M3.218 22.479l6.269 6.258 17.268-17.236-6.269-6.258z" />
      <path d="M1.865 23.818l-1.338 7.591 7.607-1.334z" />
    </StyledSvg>
  );
};

export const error = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>error</title>
      <path fill={colors.ENERGY} d="M0 0h32v32h-32v-32z" />
      <path
        style={{ fill: '#FFF' }}
        d="M13.559 17.435l-0.593-7.965c-0.111-1.552-0.166-2.667-0.166-3.343 0-0.92 0.269-1.638 0.805-2.153 0.537-0.517 1.245-0.774 2.122-0.774 1.062 0 1.773 0.33 2.131 0.989s0.537 1.611 0.537 2.852c0 0.732-0.043 1.476-0.129 2.228l-0.797 8.198c-0.086 0.976-0.271 1.724-0.556 2.246-0.284 0.52-0.754 0.781-1.408 0.781-0.667 0-1.13-0.251-1.389-0.756-0.26-0.504-0.446-1.272-0.556-2.303zM15.515 28.8c-0.727 0-1.362-0.237-1.902-0.712-0.542-0.474-0.812-1.139-0.812-1.993 0-0.746 0.259-1.381 0.776-1.905s1.153-0.785 1.903-0.785c0.751 0 1.39 0.261 1.92 0.785s0.795 1.159 0.795 1.905c0 0.842-0.268 1.503-0.805 1.985-0.536 0.48-1.16 0.721-1.875 0.721z"
      />
    </StyledSvg>
  );
};

export const print = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>print</title>
      <path d="M26.465 3.183c0-1.197-0.992-2.176-2.205-2.176h-16.541c-1.213 0-2.205 0.979-2.205 2.176v6.529h20.951v-6.529z" />
      <path d="M5.513 28.212c0 1.197 0.992 2.176 2.205 2.176h16.541c1.213 0 2.205-0.979 2.205-2.176v-8.706h-20.951v8.706zM7.719 22.771h16.541v1.088h-16.541v-1.088zM7.719 26.036h16.541v1.088h-16.541v-1.088z" />
      <path d="M28.67 10.801h-25.362c-1.875 0-3.308 1.415-3.308 3.265v9.794c0 1.85 1.433 3.265 3.308 3.265h1.103v-8.706h23.157v8.706h1.103c1.875 0 3.308-1.415 3.308-3.265v-9.794c0-1.85-1.433-3.265-3.308-3.265zM25.362 16.242c-0.662 0-1.103-0.435-1.103-1.088s0.441-1.088 1.103-1.088c0.662 0 1.103 0.435 1.103 1.088s-0.441 1.088-1.103 1.088z" />
    </StyledSvg>
  );
};

export const processing = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>processing</title>
      <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM25.35 9.365l-5.153 5.148c0.213 0.476 0.328 0.999 0.328 1.554 0 2.123-1.721 3.844-3.844 3.844s-3.844-1.721-3.844-3.844c0-2.123 1.721-3.844 3.844-3.844 0.555 0 1.078 0.116 1.554 0.324l3.122-3.122c-3.122-2.068-7.382-1.725-10.13 1.022-1.517 1.517-2.354 3.538-2.354 5.685s0.837 4.167 2.354 5.685c0.361 0.36 0.361 0.948 0 1.309-0.18 0.18-0.416 0.273-0.652 0.273-0.241 0-0.476-0.093-0.657-0.273-1.869-1.869-2.896-4.352-2.896-6.994s1.027-5.125 2.896-6.994c3.474-3.474 8.904-3.821 12.767-1.041l0.698-0.698c0.546-0.541 1.42-0.541 1.966 0 0.541 0.546 0.541 1.425 0 1.966z" />
    </StyledSvg>
  );
};

export const queued = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>queued</title>
      <path
        fill={colors.CREATIVE}
        d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"
      />
      <path
        style={{ fill: '#FFF' }}
        d="M13.333 12.8h11.733c1.178 0 2.133 0.955 2.133 2.133v7.733c0 1.178-0.955 2.133-2.133 2.133h-11.733c-1.178 0-2.133-0.955-2.133-2.133v-7.733c0-1.178 0.955-2.133 2.133-2.133zM20.163 22.529c0.201-0.201 0.309-0.437 0.309-0.71s-0.109-0.51-0.309-0.71c-0.201-0.201-0.437-0.309-0.727-0.309-0.272 0-0.526 0.109-0.727 0.309s-0.309 0.455-0.309 0.71c0 0.274 0.109 0.51 0.309 0.71 0.201 0.198 0.455 0.29 0.727 0.29s0.526-0.090 0.727-0.29zM20.422 16.021c0.054-0.274 0.090-0.472 0.090-0.62 0-0.274-0.109-0.51-0.309-0.71-0.201-0.198-0.455-0.29-0.746-0.29s-0.528 0.090-0.746 0.29c-0.217 0.184-0.328 0.42-0.309 0.71 0 0.146 0.019 0.347 0.073 0.583s0.127 0.526 0.201 0.854c0.073 0.309 0.163 0.691 0.255 1.163s0.201 1.036 0.309 1.727h0.418c0.109-0.691 0.217-1.272 0.309-1.727 0.092-0.453 0.182-0.835 0.274-1.145 0.054-0.29 0.127-0.562 0.182-0.835z"
      />
      <path
        style={{ fill: '#FFF' }}
        d="M20.8 8.8h-11.467c-1.178 0-2.133 0.955-2.133 2.133v7.467h-0.267c-1.178 0-2.133-0.955-2.133-2.133v-7.733c0-1.178 0.955-2.133 2.133-2.133h11.733c1.178 0 2.133 0.955 2.133 2.133v0.267z"
      />
      <path
        style={{ fill: '#FFF' }}
        d="M24 12h-11.467c-1.178 0-2.133 0.955-2.133 2.133v7.467h-0.267c-1.178 0-2.133-0.955-2.133-2.133v-7.733c0-1.178 0.955-2.133 2.133-2.133h11.733c1.178 0 2.133 0.955 2.133 2.133v0.267z"
      />
    </StyledSvg>
  );
};

export const refresh = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>refresh</title>
      <path d="M27.297 4.7c-2.902-2.9-6.884-4.7-11.307-4.7-8.846 0-15.99 7.16-15.99 16s7.144 16 15.99 16c7.465 0 13.689-5.1 15.47-12h-4.163c-1.641 4.66-6.084 8-11.307 8-6.624 0-12.008-5.38-12.008-12s5.384-12 12.008-12c3.322 0 6.284 1.38 8.445 3.56l-6.444 6.44h14.009v-14l-4.703 4.7z" />
    </StyledSvg>
  );
};

export const returned = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>returned</title>
      <path d="M16 32c-8.837 0-16-7.163-16-16s7.163-16 16-16c8.837 0 16 7.163 16 16s-7.163 16-16 16zM19.762 10.504h-7.816l0.645-0.672c0.402-0.419 0.402-1.098 0-1.518s-1.054-0.419-1.457 0l-2.404 2.504c0 0-0.243 0.254-0.729 0.76l0.728 0.758c0 0 0.859 0.894 2.576 2.683 0.201 0.21 0.465 0.314 0.728 0.314s0.527-0.105 0.729-0.314c0.402-0.419 0.402-1.098 0-1.518l-0.817-0.851h7.816c2.083 0 3.778 1.766 3.778 3.935s-1.695 3.935-3.778 3.935h-10.303c-0.569 0-1.031 0.48-1.031 1.073s0.461 1.073 1.031 1.073h10.303c3.22 0 5.838-2.728 5.838-6.081s-2.619-6.082-5.838-6.082z" />
    </StyledSvg>
  );
};

export const search = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>search</title>
      <path d="M22.42 19.758h-1.402l-0.497-0.479c1.739-2.023 2.785-4.648 2.785-7.505 0-6.369-5.163-11.532-11.532-11.532s-11.532 5.163-11.532 11.532c0 6.369 5.163 11.532 11.532 11.532 2.856 0 5.482-1.047 7.505-2.785l0.479 0.497v1.402l8.871 8.853 2.644-2.644-8.853-8.871zM11.775 19.758c-4.418 0-7.984-3.566-7.984-7.984s3.566-7.984 7.984-7.984c4.418 0 7.984 3.566 7.984 7.984s-3.566 7.984-7.984 7.984z" />
    </StyledSvg>
  );
};

export const setting = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>setting</title>
      <path d="M27.397 17.682c0.064-0.497 0.112-0.993 0.112-1.52s-0.048-1.024-0.112-1.521l3.366-2.56c0.303-0.233 0.383-0.652 0.191-0.993l-3.19-5.368c-0.191-0.341-0.622-0.465-0.973-0.341l-3.972 1.551c-0.829-0.621-1.723-1.133-2.696-1.521l-0.606-4.112c-0.048-0.372-0.383-0.652-0.782-0.652h-6.38c-0.399 0-0.734 0.279-0.782 0.652l-0.606 4.112c-0.973 0.388-1.866 0.915-2.696 1.521l-3.972-1.551c-0.367-0.14-0.782 0-0.973 0.341l-3.19 5.368c-0.207 0.341-0.112 0.76 0.191 0.993l3.366 2.56c-0.064 0.496-0.112 1.008-0.112 1.521s0.048 1.024 0.112 1.52l-3.366 2.56c-0.303 0.233-0.383 0.652-0.191 0.993l3.19 5.368c0.191 0.341 0.622 0.465 0.973 0.341l3.972-1.552c0.829 0.621 1.723 1.133 2.696 1.52l0.606 4.111c0.048 0.372 0.383 0.652 0.782 0.652h6.38c0.399 0 0.734-0.279 0.782-0.652l0.606-4.111c0.973-0.388 1.866-0.915 2.696-1.52l3.972 1.552c0.367 0.14 0.782 0 0.973-0.341l3.19-5.368c0.191-0.341 0.112-0.76-0.191-0.993l-3.366-2.56zM15.545 21.592c-3.078 0-5.583-2.436-5.583-5.43s2.504-5.43 5.583-5.43c3.078 0 5.583 2.436 5.583 5.43s-2.504 5.43-5.583 5.43z" />
    </StyledSvg>
  );
};

export const synapse_circle_logo = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>synapse_circle_logo</title>
      <path d="M2.423 23.645c-0.272 0-0.543-0.146-0.668-0.418-1.149-2.214-1.755-4.721-1.755-7.227 0-2.778 0.731-5.535 2.131-7.937 0.209-0.355 0.668-0.48 1.024-0.272s0.48 0.668 0.272 1.023c-1.253 2.172-1.922 4.658-1.922 7.185 0 2.319 0.522 4.512 1.587 6.559 0.188 0.376 0.042 0.815-0.334 1.023-0.104 0.042-0.23 0.063-0.334 0.063z" />
      <path d="M29.305 23.728c-0.125 0-0.23-0.021-0.334-0.084-0.376-0.188-0.522-0.648-0.334-1.003 1.044-2.005 1.587-4.282 1.587-6.559 0-2.527-0.668-5.013-1.922-7.185-0.209-0.355-0.084-0.815 0.272-1.024s0.815-0.084 1.023 0.272c1.379 2.402 2.131 5.138 2.131 7.937 0 2.527-0.606 5.034-1.755 7.248-0.125 0.251-0.397 0.397-0.668 0.397z" />
      <path d="M24.668 23.687c1.796-2.068 2.903-4.741 2.903-7.687 0-6.454-5.243-11.697-11.697-11.697-2.945 0-5.64 1.107-7.708 2.924l-2.005-2.005c2.674-2.402 6.078-3.718 9.713-3.718 3.843 0 7.478 1.483 10.193 4.198l0.042 0.042c0.292 0.292 0.773 0.292 1.065 0.021 0.292-0.292 0.292-0.773 0-1.065l-0.063-0.063c-2.987-2.987-6.997-4.637-11.238-4.637-4.282 0-8.292 1.671-11.321 4.679-0.146 0.146-0.23 0.334-0.23 0.522 0 0.209 0.084 0.397 0.23 0.543l2.548 2.548c-1.817 2.068-2.924 4.762-2.924 7.708 0 6.454 5.243 11.697 11.697 11.697 2.966 0 5.661-1.128 7.728-2.945l1.922 2.068c-2.653 2.36-6.057 3.676-9.65 3.676-3.802 0-7.415-1.504-10.151-4.24-0.292-0.292-0.773-0.292-1.065 0s-0.292 0.773 0 1.065c3.029 3.029 6.997 4.679 11.217 4.679 4.24 0 8.23-1.65 11.238-4.616 0.292-0.292 0.292-0.752 0.021-1.044l-2.465-2.653zM15.875 26.193c-5.619 0-10.193-4.574-10.193-10.193s4.574-10.193 10.193-10.193c5.619 0 10.193 4.574 10.193 10.193-0.021 5.619-4.574 10.193-10.193 10.193z" />
    </StyledSvg>
  );
};

export const trash_bin = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>trash_bin</title>
      <path d="M4.986 28.444c0 1.956 1.607 3.556 3.571 3.556h14.286c1.964 0 3.571-1.6 3.571-3.556v-21.333h-21.429v21.333zM28.2 1.778h-6.25l-1.786-1.778h-8.929l-1.786 1.778h-6.25v3.556h25v-3.556z" />
    </StyledSvg>
  );
};

export const two_boxes_in_doc = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>two_boxes_in_doc</title>
      <path d="M21.258 0.884l7.727 6.616h-7.727v-6.616zM1.548 31.873v-31.873h18.249v8.749h10.22v23.124h-28.469zM12.098 11.874v4.032h-4.71v11.592h13.54v-4.032h4.709v-11.592h-13.54zM19.162 25.986h-10.008v-8.568h2.943v6.048h7.064v2.52zM19.162 21.954h-5.298v-4.536h5.298v4.536zM23.871 21.954h-2.943v-6.048h-7.064v-2.52h10.008v8.568z" />
    </StyledSvg>
  );
};

export const user_in_doc = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>user_in_doc</title>
      <path
        fill="#000"
        d="M21.494 0.884l7.82 6.616h-7.82v-6.616zM1.548 31.873v-31.873h18.469v8.749h10.342v23.124h-28.811z"
      />
      <path
        style={{ fill: '#FFF' }}
        d="M25.828 9.999h-19.546c-0.432 0-0.782 0.279-0.782 0.625s0.35 0.625 0.782 0.625h19.546c0.432 0 0.782-0.279 0.782-0.625s-0.35-0.625-0.782-0.625z"
      />
      <path
        style={{ fill: '#FFF' }}
        d="M6.282 7.5h7.818c0.432 0 0.782-0.279 0.782-0.625s-0.35-0.625-0.782-0.625h-7.818c-0.432 0-0.782 0.279-0.782 0.625s0.35 0.625 0.782 0.625z"
      />
      <path
        style={{ fill: '#FFF' }}
        d="M25.828 13.749h-19.546c-0.432 0-0.782 0.279-0.782 0.625s0.35 0.625 0.782 0.625h19.546c0.432 0 0.782-0.279 0.782-0.625s-0.35-0.625-0.782-0.625z"
      />
      <path
        style={{ fill: '#FFF' }}
        d="M23.647 20.525c0 1.654-1.399 2.995-3.125 2.995s-3.125-1.341-3.125-2.995c0-1.654 1.399-2.995 3.125-2.995s3.125 1.341 3.125 2.995z"
      />
      <path
        style={{ fill: '#FFF' }}
        d="M20.547 24.13c-3.452 0-6.25 2.682-6.25 5.99h12.499c0-3.308-2.798-5.99-6.25-5.99z"
      />
    </StyledSvg>
  );
};

export const user = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>user</title>
      <path d="M23.88 7.303c0 4.033-3.424 7.303-7.647 7.303s-7.647-3.27-7.647-7.303c0-4.033 3.424-7.303 7.647-7.303s7.647 3.27 7.647 7.303z" />
      <path d="M16 16.091c-8.837 0-16 6.841-16 15.28h32c0-8.439-7.163-15.28-16-15.28z" />
    </StyledSvg>
  );
};

export const warning_in_paper = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>warning_in_paper</title>
      <path d="M21.278 3.118v1.177c0 0.6-0.485 1.084-1.085 1.084h-8.496c-0.135 0-0.264-0.025-0.384-0.071-0.41-0.153-0.701-0.548-0.701-1.013v-1.177c0-0.6 0.486-1.085 1.085-1.085h0.746v-0.947c0-0.599 0.485-1.085 1.085-1.085h4.837c0.369 0 0.694 0.184 0.888 0.466 0.123 0.175 0.196 0.389 0.196 0.62v0.947h0.745c0.6 0 1.085 0.485 1.085 1.085z" />
      <path d="M9.725 3.556c-0.002 0.027-0.003 0.055-0.003 0.082v1.373c0 0.542 0.34 1.003 0.818 1.181 0.139 0.054 0.291 0.083 0.448 0.083h9.912c0.7 0 1.266-0.564 1.266-1.264v-1.373c0-0.028-0.001-0.055-0.003-0.082h5.225c0.552 0 1 0.448 1 1v26.444c0 0.552-0.448 1-1 1h-22.889c-0.552 0-1-0.448-1-1v-26.444c0-0.552 0.448-1 1-1h5.225zM24.643 25.651l-8.293-13.836c-0.097-0.161-0.267-0.259-0.45-0.259s-0.354 0.098-0.45 0.259l-8.315 13.874c-0.101 0.169-0.106 0.382-0.013 0.556s0.271 0.282 0.463 0.282h16.631c0.295 0 0.532-0.246 0.532-0.548 0-0.123-0.039-0.236-0.105-0.327zM15.475 19.928l-0.198-3.448c-0.037-0.672-0.056-1.154-0.056-1.447 0-0.398 0.090-0.709 0.269-0.932s0.417-0.335 0.71-0.335c0.355 0 0.593 0.143 0.713 0.428s0.18 0.697 0.18 1.234c0 0.317-0.015 0.639-0.043 0.964l-0.267 3.549c-0.029 0.422-0.091 0.746-0.186 0.972s-0.252 0.338-0.471 0.338c-0.223 0-0.378-0.109-0.465-0.327s-0.149-0.55-0.186-0.997zM16.163 24.995c-0.252 0-0.472-0.082-0.66-0.247s-0.282-0.395-0.282-0.691c0-0.259 0.090-0.479 0.269-0.661s0.4-0.272 0.66-0.272c0.26 0 0.482 0.091 0.666 0.272s0.276 0.402 0.276 0.661c0 0.292-0.093 0.521-0.279 0.688s-0.402 0.25-0.65 0.25z" />
    </StyledSvg>
  );
};

export const warning = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 30 30"
      {...props}
    >
      <title>warning</title>
      <path
        fill={props.outerColor || colors.CREATIVE}
        d="M29.822 28.243L15.761.52c-.164-.324-.452-.52-.763-.52s-.6.197-.763.52l-14.1 27.8c-.172.338-.18.765-.022 1.113.159.348.46.564.785.564h28.2c.5 0 .902-.492.902-1.098a1.27 1.27 0 0 0-.178-.656z"
      />
      <path
        fill={props.innerColor || '#fff'}
        d="M13.5 18.54l-.39-5.338c-.074-1.04-.11-1.787-.11-2.24 0-.617.177-1.098.531-1.443.355-.347.822-.519 1.4-.519.701 0 1.17.221 1.407.663.235.442.354 1.08.354 1.911 0 .49-.029.99-.085 1.493l-.526 5.495c-.057.654-.18 1.156-.367 1.505-.188.35-.498.523-.93.523-.44 0-.745-.168-.916-.506-.172-.338-.294-.853-.367-1.544zm1.358 7.751c-.497 0-.932-.164-1.302-.494-.37-.33-.556-.792-.556-1.386 0-.519.177-.96.531-1.324a1.75 1.75 0 0 1 1.303-.545c.513 0 .95.181 1.314.545.362.364.544.805.544 1.324 0 .585-.183 1.045-.55 1.38-.368.333-.795.5-1.284.5z"
      />
    </StyledSvg>
  );
};

export const x_filled_circle = props => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 32}
      height={props.size ? props.size : 32}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>x_filled_circle</title>
      <path d="M16 32c-8.837 0-16-7.163-16-16s7.163-16 16-16c8.837 0 16 7.163 16 16s-7.163 16-16 16zM24 9.611l-1.611-1.611-6.389 6.389-6.389-6.389-1.611 1.611 6.389 6.389-6.389 6.389 1.611 1.611 6.389-6.389 6.389 6.389 1.611-1.611-6.389-6.389 6.389-6.389z" />
    </StyledSvg>
  );
};

export const qs_mark= props => {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 8}
      height={props.size ? props.size : 15}
      padding="4px"
      viewBox="0 0 8 15"
      style={{ width: '24px', height: '24px', padding: '4px' }}
    >
      <title>qs_mark</title>
      <path fill="#333" fillRule="nonzero" d="M0 1.41c.217-.192.456-.374.715-.547A5.13 5.13 0 0 1 2.533.11C2.885.037 3.265 0 3.675 0c.556 0 1.063.077 1.52.23.457.154.85.373 1.175.657.327.285.58.629.758 1.032.18.403.269.854.269 1.353 0 .486-.07.906-.211 1.261-.14.355-.318.664-.533.926-.214.262-.446.49-.695.681-.25.192-.486.373-.71.542-.224.17-.417.336-.58.5a.985.985 0 0 0-.293.55l-.22 1.402H2.532L2.37 7.57a.427.427 0 0 1-.01-.082v-.081c0-.282.07-.526.211-.734.14-.208.317-.403.528-.586.21-.182.438-.36.681-.532.243-.173.47-.36.681-.561.211-.202.387-.43.528-.686.14-.256.211-.557.211-.902 0-.23-.043-.437-.13-.619a1.4 1.4 0 0 0-.36-.47 1.613 1.613 0 0 0-.551-.302 2.217 2.217 0 0 0-.696-.106c-.364 0-.673.04-.925.12-.253.08-.467.17-.643.269s-.325.188-.446.268a.613.613 0 0 1-.326.12.523.523 0 0 1-.5-.287L0 1.41zm1.813 11.312c0-.199.037-.387.11-.566.074-.18.176-.333.308-.46.13-.129.286-.231.465-.308.179-.077.37-.115.576-.115.198 0 .387.038.566.115.179.077.332.18.46.307.128.128.23.282.307.46.077.18.115.368.115.567 0 .204-.038.395-.115.57a1.389 1.389 0 0 1-.768.758c-.178.074-.367.11-.565.11a1.5 1.5 0 0 1-1.041-.412 1.364 1.364 0 0 1-.307-.455 1.465 1.465 0 0 1-.11-.571z" />
    </StyledSvg>
  )
}
/*

  If you want to add new icons
  Please add icon in alphabetical order

*/
