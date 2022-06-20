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

test('right panel is rendered correctly onclick', () => {
    render(
        <StoreProvider>
            <Home />
        </StoreProvider>
    );

    const table = screen.getByTitle("table");
    const row = within(table).getAllByTitle("table-row");
    const testingIndex = 3
    fireEvent.click(row[testingIndex])

    const rightPanelElement = screen.queryByTestId("right-panel")
    expect(rightPanelElement).toBeInTheDocument();

    const expectedData = tableData.collection.items[testingIndex].entity.data
    let test1 = "summary"
    let test2 = "status"
    let test3 = "type"
    expect(screen.getByTitle(`${test1}-input`)).toHaveValue(expectedData.summary);
    expect(screen.getByTitle(`${test2}-input`)).toHaveValue(expectedData.status.id.toString()); //TODO
    expect(screen.getByTitle(`${test3}-input`)).toHaveValue(expectedData.type.id.toString()); //TODO
    // TODO .....
});