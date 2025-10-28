// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticsearch_domain_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchDomainPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticsearch_domain_policy#access_policies ElasticsearchDomainPolicy#access_policies}
  */
  readonly accessPolicies: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticsearch_domain_policy#domain_name ElasticsearchDomainPolicy#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticsearch_domain_policy#id ElasticsearchDomainPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticsearch_domain_policy aws_elasticsearch_domain_policy}
*/
export class ElasticsearchDomainPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elasticsearch_domain_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchDomainPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchDomainPolicy to import
  * @param importFromId The id of the existing ElasticsearchDomainPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticsearch_domain_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchDomainPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_elasticsearch_domain_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticsearch_domain_policy aws_elasticsearch_domain_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchDomainPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchDomainPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticsearch_domain_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.29.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPolicies = config.accessPolicies;
    this._domainName = config.domainName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policies - computed: false, optional: false, required: true
  private _accessPolicies?: string; 
  public get accessPolicies() {
    return this.getStringAttribute('access_policies');
  }
  public set accessPolicies(value: string) {
    this._accessPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPoliciesInput() {
    return this._accessPolicies;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policies: cdktf.stringToTerraform(this._accessPolicies),
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policies: {
        value: cdktf.stringToHclTerraform(this._accessPolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
