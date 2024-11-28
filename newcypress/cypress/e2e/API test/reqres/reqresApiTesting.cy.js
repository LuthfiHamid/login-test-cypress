/// <reference types="cypress" />

describe('Reqres API Testing', () => {

    it.only('test API List Users', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.be.null
                expect(response.body.page).to.eq(2)
                expect(response.body.per_page).to.eq(6)
                expect(response.body.total).to.eq(12)
                expect(response.body.total_pages).to.eq(2)
            })
    })
    
    it.only('test API Single User', () => {
        cy.request('GET', 'https://reqres.in/api/users/2')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.be.null
                expect(response.body.data.id).to.eq(2)
                expect(response.body.data.first_name).to.eq('Janet')
                expect(response.body.data.last_name).to.eq('Weaver')
            })
    })

    it.only('test API Single User Not Found', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false
        })
            .then((response) => {
                expect(response.status).to.eq(404)
            })
    })

    it.only('test API List Unknown', () => {
        cy.request('GET', 'https://reqres.in/api/unknown')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.be.null
                expect(response.body.page).to.eq(1)
                expect(response.body.per_page).to.eq(6)
                expect(response.body.total).to.eq(12)
                expect(response.body.total_pages).to.eq(2)
            })
    })

    it.only('test API Single Unknown', () => {
        cy.request('GET', 'https://reqres.in/api/unknown/2')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.be.null
                expect(response.body.data.id).to.eq(2)
                expect(response.body.data.name).to.eq('fuchsia rose')
                expect(response.body.data.year).to.eq(2001)
            })
    })

    it.only('test API Single User Unknown Not Found', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/23',
            failOnStatusCode: false
        })
            .then((response) => {
                expect(response.status).to.eq(404)
            })
    })

    it.only('test API Create', () => {
        const userData = {
          name: 'morpheus',
          job: 'leader'
        }
      
        cy.request('POST', 'https://reqres.in/api/users', userData)
          .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('id')
            expect(response.body.name).to.eq(userData.name)
            expect(response.body.job).to.eq(userData.job)
          })
      })

      it.only('test API Update', () => {
        const updateData = {
          name: 'morpheus',
          job: 'zion resident'
        }
      
        cy.request('PUT', `https://reqres.in/api/users/2`, updateData)
          .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body.name).to.eq(updateData.name)
            expect(response.body.job).to.eq(updateData.job)
          })
      })

      it.only('test API Delete', () => {
        cy.request('DELETE', 'https://reqres.in/api/users')
            .then((response) => {
                expect(response.status).to.eq(204)
                
            })
      })

      it.only('test API Register Successful', () => {
        const userData ={
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        }
        cy.request('POST', 'https://reqres.in/api/register', userData)
            .then((response) => {
                expect(response.status).to.eq(200)
                
            })
      })

      it.only('test API Register Unsuccessful', () => {
        const missingPassword = {
          email: 'sydney@fife'
        };
    
        cy.request({
          method: 'POST',
          url: 'https://reqres.in/api/register',
          body: missingPassword,
          failOnStatusCode: false})
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Missing password')
        })
      })

      it.only('test API Login Successfully', () => {
        const loginData = {
          email: 'eve.holt@reqres.in',
          password: 'cityslicka'
        };
    
        cy.request('POST', 'https://reqres.in/api/login',loginData)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('token')
        })
      })

      it.only('test API Login Unsuccessful', () => {
        const missingPassword = {
          email: 'peter@klaven'
        };
    
        cy.request({
          method: 'POST',
          url: 'https://reqres.in/api/login',
          body: missingPassword,
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400)
          expect(response.body.error).to.eq('Missing password')
        })
      })

      it.only('test API Delayed Response', () => {
        cy.request('GET', 'https://reqres.in/api/users?delay=3')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.be.null
                expect(response.body.page).to.eq(1)
                expect(response.body.per_page).to.eq(6)
                expect(response.body.total).to.eq(12)
                expect(response.body.total_pages).to.eq(2)
            })
    })



})