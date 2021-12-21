import { TableColumn } from "shared";

export const MockTableColumns: TableColumn[] = [{
    title: "Name",
    header: "Name",
    show: true,
}, {
    title: "Age",
    header: "Age",
    show: true,
}];

export const MockTableColumnsShowFalse: TableColumn[] = [
    {
        title: "Name",
        header: "Name",
        show: false,
    },
    ...MockTableColumns];

export const MockTableRows = [
    { Name: "Ali", Age: 20 },
    { Name: "Ahmed", Age: 30 },
    { Name: "Fahad", Age: 40 }];

export const MockTableRowsFive = [
    { Name: "Ali zafar", Age: 20 },
    { Name: "Ahmed wali", Age: 30 },
    { Name: "Fahad jaleel", Age: 20 },
    { Name: "Bilal kabeel", Age: 10 },
    { Name: "Anwar majeed", Age: 40 }
];

export const MockTableRowsTen = [
    { Name: "Ali", Age: 20 },
    { Name: "Ahmed harron", Age: 30 },
    { Name: "Fahad", Age: 20 },
    { Name: "Bilal safdar", Age: 10 },
    { Name: "Anwar", Age: 40 },
    { Name: "Ali umair", Age: 20 },
    { Name: "Ahmed", Age: 30 },
    { Name: "Fahad", Age: 20 },
    { Name: "Bilal saafi", Age: 10 },
    { Name: "Anwar jutt", Age: 40 }
];

export const MockTableRowsWithHighlight = [
    { Name: "Ali high", Age: 20, highlight: true },
    { Name: "Ahmed low", Age: 30, highlight: false },
    { Name: "Fahad lows", Age: 40, highlight: false }
];