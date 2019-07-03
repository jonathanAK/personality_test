import {configure, shallow, ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter});

describe('<ProfileCard/>', () => {
    let wrapper: ShallowWrapper;

    // beforeEach(() => {
    //     //     wrapper = shallow(<ProfileCard imgSrc={`${process.env.PUBLIC_URL}/img/cat-default.jpg`}
    //     //     id={'cat-id'}
    //     //     name="Testy cat"
    //     //     description="desc"/>);
    //     //
    //     // });
    //     //
    //     // it('should render without RouterLink element', () => {
    //     //     expect(wrapper.find(RouterLink).length).toEqual(0);
    //     // });
});
