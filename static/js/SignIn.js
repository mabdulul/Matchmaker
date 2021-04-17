import React from 'react';
import { Container, Grid } from 'rsuite';

const SignIn = () => {
    return
    <Container>

        <Grid className="mt-page">
            <Row>
                <Col xs={24} md={12} mdoffset={6}>
                    <Panel>
                        <div className="text-center">
                            <h2> Title text can go here</h2>
                            <p> I'm just making the skeleton page anyone can work on this!</p>
                        </div>

                        <div>
                            <p> this is where they put the buttons in our tutorial</p>
                        </div>
                    </Panel>
                </Col>
            </Row>

        </Grid>

    </Container>
}

export default SignIn;