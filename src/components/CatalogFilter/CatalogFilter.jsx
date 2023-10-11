import React, { useState } from 'react';

import {
  CatalogFormFilter,
  ContainerLabel,
  FormFilterLabel,
  FormFilterSelect,
  FormFilterOption,
  ContainerInput,
  FormFilterInput,
  InputText,
  FormFilterButton,
} from './CatalogFilter.style';

const CatalogFilter = ({
  selectedBrand,
  setSelectedBrand,
  selectedPrice,
  setSelectedPrice,
}) => {
  const [tempSelectedBrand, setTempSelectedBrand] = useState(selectedBrand);
  const [tempSelectedPrice, setTempSelectedPrice] = useState(selectedPrice);

  const carBrands = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Chrysler',
    'Kia',
    'Land',
  ];
  const rentPrice = [25, 30, 35, 40, 45, 50, 55, 75, 150, 200, 250, 300, 500];

  const applyFilter = e => {
    e.preventDefault();
    console.log('In filter brand', tempSelectedBrand);
    console.log('In filter price', tempSelectedPrice);
    setSelectedBrand(tempSelectedBrand);
    setSelectedPrice(tempSelectedPrice);
  };

  return (
    <>
      <CatalogFormFilter autoComplete="on">
        <ContainerLabel>
          <FormFilterLabel htmlFor="carBrand">Car brand</FormFilterLabel>
          <FormFilterSelect
            id="carBrand"
            name="carBrand"
            value={tempSelectedBrand}
            onChange={e => setTempSelectedBrand(e.target.value)}
          >
            <FormFilterOption value="All brands" defaultValue>
              All brands
            </FormFilterOption>
            {carBrands?.map(item => (
              <FormFilterOption key={item} value={item}>
                {item}
              </FormFilterOption>
            ))}
          </FormFilterSelect>
        </ContainerLabel>

        <ContainerLabel>
          <FormFilterLabel htmlFor="carPrice">Price/ 1 hour</FormFilterLabel>
          <FormFilterSelect
            id="carPrice"
            name="carPrice"
            value={tempSelectedPrice}
            onChange={e => setTempSelectedPrice(e.target.value)}
            style={{ width: '125px' }}
          >
            <FormFilterOption value="To $" defaultValue>
              To $
            </FormFilterOption>
            {rentPrice?.map(item => (
              <FormFilterOption key={item} value={item}>
                {item}
              </FormFilterOption>
            ))}
          </FormFilterSelect>
        </ContainerLabel>

        <ContainerLabel>
          <FormFilterLabel style={{ marginBottom: '0px' }}>
            Car mileage / km
            <ContainerInput>
              <div style={{ position: 'relative' }}>
                <FormFilterInput type="text" id="from" name="from" />
                <InputText>From</InputText>
              </div>
              <div style={{ position: 'relative' }}>
                <FormFilterInput
                  type="text"
                  id="to"
                  name="to"
                  style={{ borderRadius: '0px 14px 14px 0px', border: 'none' }}
                />
                <InputText>To</InputText>
              </div>
            </ContainerInput>
          </FormFilterLabel>
        </ContainerLabel>

        <FormFilterButton onClick={applyFilter}>Search</FormFilterButton>
      </CatalogFormFilter>
    </>
  );
};

export default CatalogFilter;
