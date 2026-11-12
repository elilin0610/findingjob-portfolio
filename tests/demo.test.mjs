import test from 'node:test';
import assert from 'node:assert/strict';
import {classify} from '../src/demo.mjs';
import {roleDecision} from '../src/role-filter.mjs';
test('duplicate company and job id are collapsed',()=>{assert.equal(classify([{company:'Example',id:'1',title:'IT Helpdesk'},{company:'Example',id:'1',title:'IT Helpdesk'}]).length,1);});
test('junior developer becomes a candidate, not verified eligibility',()=>{const d=roleDecision('Junior Backend Developer');assert.equal(d.relevant,true);assert.equal(d.seniority_unverified,true);});
test('explicit senior and people-manager titles excluded',()=>{assert.equal(roleDecision('Senior Software Engineer').relevant,false);assert.equal(roleDecision('Engineering Manager').relevant,false);});
