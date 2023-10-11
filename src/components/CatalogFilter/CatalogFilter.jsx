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

const CatalogFilter = () => {
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
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ];
  const rentPrice = [25, 30, 35, 40, 45, 50, 55, 75, 150, 200, 250, 300, 500];

  return (
    <>
      <CatalogFormFilter autoComplete="on">
        <ContainerLabel>
          <FormFilterLabel htmlFor="carBrand">Car brand</FormFilterLabel>
          <FormFilterSelect id="carBrand" name="carBrand">
            <FormFilterOption value="All breands" disabled defaultValue>
              All breands
            </FormFilterOption>
            {carBrands?.map(item => (
              <FormFilterOption key={item} value={item}>
                {item}
              </FormFilterOption>
            ))}
          </FormFilterSelect>
        </ContainerLabel>

        <ContainerLabel>
          <FormFilterLabel htmlFor="price">Price/ 1 hour</FormFilterLabel>
          <FormFilterSelect id="price" name="price" style={{ width: '125px' }}>
            <FormFilterOption value="To $" disabled defaultValue>
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

        <FormFilterButton>Search</FormFilterButton>
      </CatalogFormFilter>
    </>
  );
};

export default CatalogFilter;
