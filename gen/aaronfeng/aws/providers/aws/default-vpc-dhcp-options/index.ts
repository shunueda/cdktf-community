// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/default_vpc_dhcp_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultVpcDhcpOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/default_vpc_dhcp_options#id DefaultVpcDhcpOptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/default_vpc_dhcp_options#netbios_name_servers DefaultVpcDhcpOptions#netbios_name_servers}
  */
  readonly netbiosNameServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/default_vpc_dhcp_options#netbios_node_type DefaultVpcDhcpOptions#netbios_node_type}
  */
  readonly netbiosNodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/default_vpc_dhcp_options#tags DefaultVpcDhcpOptions#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/default_vpc_dhcp_options aws_default_vpc_dhcp_options}
*/
export class DefaultVpcDhcpOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_default_vpc_dhcp_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultVpcDhcpOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultVpcDhcpOptions to import
  * @param importFromId The id of the existing DefaultVpcDhcpOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/default_vpc_dhcp_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultVpcDhcpOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_default_vpc_dhcp_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/default_vpc_dhcp_options aws_default_vpc_dhcp_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultVpcDhcpOptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DefaultVpcDhcpOptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_default_vpc_dhcp_options',
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
    this._id = config.id;
    this._netbiosNameServers = config.netbiosNameServers;
    this._netbiosNodeType = config.netbiosNodeType;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_name_servers - computed: true, optional: false, required: false
  public get domainNameServers() {
    return this.getStringAttribute('domain_name_servers');
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

  // netbios_name_servers - computed: false, optional: true, required: false
  private _netbiosNameServers?: string[]; 
  public get netbiosNameServers() {
    return this.getListAttribute('netbios_name_servers');
  }
  public set netbiosNameServers(value: string[]) {
    this._netbiosNameServers = value;
  }
  public resetNetbiosNameServers() {
    this._netbiosNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosNameServersInput() {
    return this._netbiosNameServers;
  }

  // netbios_node_type - computed: false, optional: true, required: false
  private _netbiosNodeType?: string; 
  public get netbiosNodeType() {
    return this.getStringAttribute('netbios_node_type');
  }
  public set netbiosNodeType(value: string) {
    this._netbiosNodeType = value;
  }
  public resetNetbiosNodeType() {
    this._netbiosNodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosNodeTypeInput() {
    return this._netbiosNodeType;
  }

  // ntp_servers - computed: true, optional: false, required: false
  public get ntpServers() {
    return this.getStringAttribute('ntp_servers');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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
      id: cdktf.stringToTerraform(this._id),
      netbios_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._netbiosNameServers),
      netbios_node_type: cdktf.stringToTerraform(this._netbiosNodeType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netbios_name_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._netbiosNameServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      netbios_node_type: {
        value: cdktf.stringToHclTerraform(this._netbiosNodeType),
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
