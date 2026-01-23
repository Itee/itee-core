import {
    Configurator,
    RulesSet,
    MochaRecommendedRulesSet,
    SourceBackendRulesSet,
    SourceFrontendRulesSet,
    SourceRulesSet,
    TestBenchmarksRulesSet,
    TestUnitsRulesSet
} from '@itee/tasks/sources/lints/lint.conf.mjs'

SourceRulesSet.rules['no-console'] = 'warn'

SourceFrontendRulesSet.files   = ['sources/loggers/*.js']

Configurator.rulesSets = [
    SourceRulesSet,
    SourceFrontendRulesSet,
    SourceBackendRulesSet,
    TestBenchmarksRulesSet,
    TestUnitsRulesSet,
    MochaRecommendedRulesSet
]

export default Configurator.getConfig()
