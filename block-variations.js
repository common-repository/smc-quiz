/* layout: { type: "flex", orientation: "smc-quiz" }, */
wp.blocks.registerBlockVariation(
    "core/group",
    {
        name: "smc_quiz",
        title: "SMC Quiz",
        description: "Includes parent quiz block, sample question group and post quiz area.",
        attributes: {
            allowedBlocks: ["core/group", "core/paragraph"],
            className: "is-style-smc-quiz"
        },
        isActive: ["className"],
        innerBlocks: [
            [ "core/group", {},
                [
                    [ "core/heading", {"placeholder": "Question Text"} ],
                    [ "core/list", {},
                        [
                            ["core/list-item", {"placeholder": "Answer Choice One"}],
                            ["core/list-item", {"placeholder": "Answer Choice Two"}],
                            ["core/list-item", {"placeholder": "Answer Choice Three"}],
                            ["core/list-item", {"placeholder": "Answer Choice Four"}]
                        ]
                    ],
                    [ "core/group", {},
                        [ ["core/paragraph", {"placeholder": "Post *answer* area -- delete if unused."}] ]
                    ]
                ]
            ],
            [ "core/group", {"className": "is-style-smc-post-quiz"},
                [ ["core/paragraph", {"placeholder": "Post *quiz* area -- delete if unused."}] ]
            ]
        ],
        scope: [ "inserter" ]
    }
);