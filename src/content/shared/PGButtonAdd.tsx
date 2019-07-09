import React from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
};

const Button = styled.svg`
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAADCUlEQVR4Ae3bA4wdURjF8a+23aDm7nude05Qu41R29Ei2ljdaBsntd3YdWPWtm3buI1q3JnZmTffZud3Yu5/9XSvRCeVSqVSKa8LRpsSLsQW7uc53uMnvMN9nud+bOFCU4LR7CQa5dXnZKzhdVr3cA1rzcRuDUQL04vL+Jo22PASKzxPksUaZhL20IYf9nAya0gSMk04F/dpI9hdlGaaSE5VMbP5mDbCPTRzpIrkRjaf+2lj2P5svsQPo/mGNqa9wWiJVVWU0cY7My+2X6X2tbGVNgfb1r62RM+0wEHa3AwH85pKtDIdcY02h7uU6SjRYRveoM3xbpi20f3yXKBNYOezLSP50+VR2oR2NII/ZyymTW5YLOVjhtMmvJESHpvzYdIBeMDmEhY20SY/bJRwvMG0SjZEQqjOK7ThJ78pV8Bl1pCgWEirJsCyMPj3/46mAFyV6hIEZtFqCqDFTAmC57UF8Lz4ZwbRqguwZqD4hY2KAoI/HmTr4Z3GAL7N1hM/zBhalQHWjBE/sEhrABaJHzypNYAnxS2vKa3aAOvjxb4ZpjnADBMXFmoOYKE7YIHqgAXigl2aA7BLXHgi+BcYXuDAE+KCa5oDcM0d8ER1wBN3wBfVAZ/dAe9VB7wXFz7SHMBH4oKrmgNwtRL8G9X9QLZTXLiwoj+VKNYcgCJx4UjNAd4IceneTHNAXn1xw3GtATgufnCh1gAurBxvq2Tr8a3GALzL1hN/uF5jANeLX2agxgAMqARvr2v+gGOWBFIdt1UF3JHqEgyKNQWgWIJiDZ5TE3BOqktwXl9aHTN9JBxs1H7UwIHN8SDxgIdsLuFxZNIBZnhlOPDkOHJ2JLGAI5GcIO3ejOeTOfTXvZlEw7TVf+xS2cFXXGOnCn302LSowIe/sTX8n65LlfiP36Ms5pscHMfX2i9AOJiecV1BMT3TS0BBrmGhVP81LAfWwBTspQ0/7MUU1pBkeR5W4FWYq4jMiBbdGnAyVwe7DKr7Ou7W79dx3+M+z+MAtmKRKcFor4ukUqlUKhWZrzTF164bNaG2AAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-size: 50px;
`;

export const PGButtonAdd: React.FC<Props> = props => (
  <Button onClick={props.onClick} />
);
