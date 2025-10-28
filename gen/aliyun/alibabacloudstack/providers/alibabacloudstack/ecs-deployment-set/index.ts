// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ecs_deployment_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsDeploymentSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ecs_deployment_set#deployment_set_name EcsDeploymentSet#deployment_set_name}
  */
  readonly deploymentSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ecs_deployment_set#description EcsDeploymentSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ecs_deployment_set#domain EcsDeploymentSet#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ecs_deployment_set#granularity EcsDeploymentSet#granularity}
  */
  readonly granularity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ecs_deployment_set#id EcsDeploymentSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ecs_deployment_set#on_unable_to_redeploy_failed_instance EcsDeploymentSet#on_unable_to_redeploy_failed_instance}
  */
  readonly onUnableToRedeployFailedInstance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ecs_deployment_set#strategy EcsDeploymentSet#strategy}
  */
  readonly strategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ecs_deployment_set#tags EcsDeploymentSet#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ecs_deployment_set alibabacloudstack_ecs_deployment_set}
*/
export class EcsDeploymentSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ecs_deployment_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsDeploymentSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsDeploymentSet to import
  * @param importFromId The id of the existing EcsDeploymentSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ecs_deployment_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsDeploymentSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ecs_deployment_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ecs_deployment_set alibabacloudstack_ecs_deployment_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsDeploymentSetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EcsDeploymentSetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ecs_deployment_set',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentSetName = config.deploymentSetName;
    this._description = config.description;
    this._domain = config.domain;
    this._granularity = config.granularity;
    this._id = config.id;
    this._onUnableToRedeployFailedInstance = config.onUnableToRedeployFailedInstance;
    this._strategy = config.strategy;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_set_name - computed: false, optional: true, required: false
  private _deploymentSetName?: string; 
  public get deploymentSetName() {
    return this.getStringAttribute('deployment_set_name');
  }
  public set deploymentSetName(value: string) {
    this._deploymentSetName = value;
  }
  public resetDeploymentSetName() {
    this._deploymentSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentSetNameInput() {
    return this._deploymentSetName;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // granularity - computed: false, optional: true, required: false
  private _granularity?: string; 
  public get granularity() {
    return this.getStringAttribute('granularity');
  }
  public set granularity(value: string) {
    this._granularity = value;
  }
  public resetGranularity() {
    this._granularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // on_unable_to_redeploy_failed_instance - computed: false, optional: true, required: false
  private _onUnableToRedeployFailedInstance?: string; 
  public get onUnableToRedeployFailedInstance() {
    return this.getStringAttribute('on_unable_to_redeploy_failed_instance');
  }
  public set onUnableToRedeployFailedInstance(value: string) {
    this._onUnableToRedeployFailedInstance = value;
  }
  public resetOnUnableToRedeployFailedInstance() {
    this._onUnableToRedeployFailedInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUnableToRedeployFailedInstanceInput() {
    return this._onUnableToRedeployFailedInstance;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_set_name: cdktf.stringToTerraform(this._deploymentSetName),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      granularity: cdktf.stringToTerraform(this._granularity),
      id: cdktf.stringToTerraform(this._id),
      on_unable_to_redeploy_failed_instance: cdktf.stringToTerraform(this._onUnableToRedeployFailedInstance),
      strategy: cdktf.stringToTerraform(this._strategy),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_set_name: {
        value: cdktf.stringToHclTerraform(this._deploymentSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      granularity: {
        value: cdktf.stringToHclTerraform(this._granularity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_unable_to_redeploy_failed_instance: {
        value: cdktf.stringToHclTerraform(this._onUnableToRedeployFailedInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strategy: {
        value: cdktf.stringToHclTerraform(this._strategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
