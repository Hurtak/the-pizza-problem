import * as React from "react";
import styled from "styled-components/macro";
import * as s from "../styles";
import { Text } from "./text";

const StyledTable = styled.table({
  tableLayout: "fixed",
});

const StyledTableRow = styled.tr({
  "> *:nth-child(1)": {
    width: "20%",
  },
  "> *:nth-child(2)": {
    width: "30%",
  },
  "> *:nth-child(3)": {
    //
  },
});

const StyledTableCell = styled.td({
  padding: s.grid(0.5),
  border: "1px solid black",

  // Reset <th> default browser styles
  fontWeight: "initial",
  textAlign: "initial",
});

export const TableRow: React.FC = (props) => <StyledTableRow>{props.children}</StyledTableRow>;

export const TableCell: React.FC = (props) => (
  <StyledTableCell>
    <Text>{props.children}</Text>
  </StyledTableCell>
);

export const Table: React.FC<{
  headColumnsText: string[];
}> = (props) => {
  return (
    <StyledTable>
      <thead>
        <TableRow>
          {props.headColumnsText.map((text, index) => (
            <StyledTableCell as="th" key={`${text}_${index}`}>
              <Text>{text}</Text>
            </StyledTableCell>
          ))}
        </TableRow>
      </thead>
      <tbody>{props.children}</tbody>
    </StyledTable>
  );
};
