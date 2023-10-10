import styled from 'styled-components';

export const CatalogFormFilter = styled.form`
  font-family: Manrope;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 18px;

  margin-bottom: 50px;
`;

export const ContainerLabel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormFilterLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #8a8a89;

  margin-bottom: 8px;
`;

export const FormFilterSelect = styled.select`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #121417;
  background-color: #f7f7fb;
  width: 224px;

  padding: 14px 0px 14px 18px;
  border-radius: 14px;
  border: none;
`;

export const FormFilterOption = styled.option``;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

export const FormFilterInput = styled.input`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #121417;
  background-color: #f7f7fb;
  width: 160px;

  padding: 14px 0px 14px 75px;
  border-radius: 14px 0px 0px 14px;
  border: none;
  border-right: 1px solid #8a8a8933;
`;

export const InputText = styled.span`
  position: absolute;
  top: 14px;
  left: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #121417;
`;

export const FormFilterButton = styled.button`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #ffffff;
  background-color: #3470ff;
  padding-top: 14px;
  padding-bottom: 14px;
  border: none;
  border-radius: 12px;
  width: 136px;
  height: 46px;

  &:hover {
    background-color: #0b44cd;
  }
  &:focus {
    background-color: #0b44cd;
  }
`;
