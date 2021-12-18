import { createStore, StoreProvider } from "easy-peasy";
import renderer from "react-test-renderer";
import TodoForm from "../TodoForm";
import { initialState, StoreModel } from "../../state/store";

test("Check if forms renders correctly", () => {
  const mockStore = createStore<StoreModel>(initialState);
  const app = (
    <StoreProvider store={mockStore}>
      <TodoForm />
    </StoreProvider>
  );

  const renderedComponent = renderer.create(app);
  let tree = renderedComponent.toJSON();
  expect(tree).toMatchSnapshot();
});
