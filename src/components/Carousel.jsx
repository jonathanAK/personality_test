<div style={{"padding":"0 60px","maxWidth":800,"margin":"0 auto"}}>
    <ItemsCarousel
        gutter={12}
        activePosition={'center'}
        chevronWidth={60}
        numberOfCards={2}
        slidesToScroll={2}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={this.state.activeItemIndex}
        requestToChangeActive={value => this.setState({ activeItemIndex: value })}
        rightChevron={'>'}
        leftChevron={'<'}
    >
        {Array.from(new Array(10)).map((_, i) =>
            <div
                key={i}
                style={{
                    height: 200,
                    background: 'url(https://placeimg.com/380/200/nature)'
                }}
            />
        )}
    </ItemsCarousel>
</div>