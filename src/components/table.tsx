import * as React from "react";
import { Text } from "./text";

export const TableRow: React.FC = (props) => <tr>{props.children}</tr>;

export const TableCell: React.FC = (props) => (
  <td>
    <Text>{props.children}</Text>
  </td>
);

export const Table: React.FC<{
  headColumnsText: string[];
}> = (props) => {
  return (
    <table>
      <thead>
        <tr>
          {props.headColumnsText.map((text) => (
            <th>
              <Text>{text}</Text>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};
