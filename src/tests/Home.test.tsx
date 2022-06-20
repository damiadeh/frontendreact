import React from 'react';
import { fireEvent, getAllByRole, getByRole, render, screen, within } from '@testing-library/react';
import Home from '../container/Home';
import tableData from "../datasource/items.json"
import { StoreProvider } from '../context/store';

test('right panel not rendered onload', () => {
    render(
        <StoreProvider>
            <Home />
        </StoreProvider>);
    const rightPanelElement = screen.queryByTestId("right-panel")
    expect(rightPanelElement).toBeNull();
});

test('right panel is rendered onclick of any table row only', () => {
    render(
        <StoreProvider>
            <Home />
        </StoreProvider>
    );
    const table = screen.getByTitle("table");
    const row = within(table).getAllByTitle("table-row");

    fireEvent.click(row[3])

    const rightPanelElement = screen.queryByTestId("right-panel")
    expect(rightPanelElement).toBeInTheDocument();
});

test('right panel is rendered corectly', () => {
    render(
        <StoreProvider>
            <Home />
        </StoreProvider>
    );
    const table = screen.getByTitle("table");
    const row = within(table).getAllByTitle("table-row");

    fireEvent.click(row[3])

    const rightPanelElement = screen.queryByTestId("right-panel")
    expect(rightPanelElement).toBeInTheDocument();
});