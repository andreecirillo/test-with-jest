const user = {
    name: 'Tony Tinkerton',
    age: 42,
    job: 'inventor'
}

test('user matches', () => {
    expect(user).toMatchSnapshot()
})