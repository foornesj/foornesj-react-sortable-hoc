import * as React from 'react';

import { provideDisplayName } from '../utils';

export default function sortableHandle(
  WrappedComponent
) {
  return class WithSortableHandle extends React.Component {
    constructor(props) {
      super(props);
      this.WrappedComponentRef = React.createRef(null)
    }
    static displayName = provideDisplayName('sortableHandle', WrappedComponent);

    componentDidMount() {
      const node = this.WrappedComponentRef.current;
      node.sortableHandle = true;
    }

    getWrappedInstance() {
      return this.WrappedComponentRef.current;
    }


    render() {
      return <WrappedComponent ref={this.WrappedComponentRef} {...this.props} />;
    }
  };
}

export function isSortableHandle(node) {
  return node.sortableHandle != null;
}
