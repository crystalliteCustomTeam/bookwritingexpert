import React from 'react'
import { Container, Table, Row } from 'react-bootstrap'
import styles from '@/styles/Tablelayout.module.css'
import { TiTick } from 'react-icons/ti'
import { ImCross } from 'react-icons/im'

const Tablelayout = () => {
    return (
        <>
            <div className={styles.tablelayout}>
                <Container>
                    <Row>
                        <Table className='striped lineediting'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>
                                        <h3 className={styles.btntabls}>LINE-EDITING</h3>
                                    </th>
                                    <th>
                                        <h3 className={styles.btntabls}>COPY-EDITING</h3>
                                    </th>
                                    <th>
                                        <h3 className={styles.btntabls}>PROOF-READING</h3>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Price</td>
                                    <td>From $30/1000 words</td>
                                    <td>From $25/1000 words</td>
                                    <td>From $20/1000 words</td>
                                </tr>
                                <tr>
                                    <td>Typos</td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                </tr>
                                <tr>
                                    <td>US or UK</td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                </tr>
                                <tr>
                                    <td>Punctuation</td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                </tr>
                                <tr>
                                    <td>Grammar</td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td>Some</td>
                                </tr>
                                <tr>
                                    <td>Fact-checking</td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td><ImCross size={15} className={styles.rightcolor} /></td>
                                </tr>
                                <tr>
                                    <td>Consistency</td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td><ImCross size={15} className={styles.rightcolor} /></td>
                                </tr>
                                <tr>
                                    <td>Repetitions</td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td><ImCross size={15} className={styles.rightcolor} /></td>
                                </tr>

                                <tr>
                                    <td>Clarity</td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td>Some</td>
                                    <td><ImCross size={15} className={styles.rightcolor} /></td>
                                </tr>

                                <tr>
                                    <td>Style &amp; flow</td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td><ImCross size={15} className={styles.rightcolor} /></td>
                                    <td><ImCross size={15} className={styles.rightcolor} /></td>
                                </tr>
                                <tr>
                                    <td>Cutting</td>
                                    <td><TiTick size={25} className={styles.rightcolor} /></td>
                                    <td><ImCross size={15} className={styles.rightcolor} /></td>
                                    <td><ImCross size={15} className={styles.rightcolor} /></td>
                                </tr>
                                <tr>
                                    <td>Rewriting</td>
                                    <td>Some</td>
                                    <td><ImCross size={15} className={styles.rightcolor} /></td>
                                    <td><ImCross size={15} className={styles.rightcolor} /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Tablelayout